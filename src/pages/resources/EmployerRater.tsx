import { useState, useEffect } from 'react';
import db from '../../firebase';
import '../../assets/styles/App.scss';
import { RatingCategory, ratingCategoryToText } from './EvaluateEmployerTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface EvaluateEmployerReviewsProps {
  company: string;
  category: RatingCategory;
  username: string;
}

function EmployerRater({
  company,
  category,
  username,
}: EvaluateEmployerReviewsProps) {
  const [savedStars, setSavedStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const iconType = (newScore: number) => {
    let iconType = newScore <= savedStars ? 'fas' : 'far';
    if (hoverStars) {
      iconType = newScore <= hoverStars ? 'fas' : 'far';
    }
    return iconType as IconPrefix;
  };

  useEffect(() => {
    setSavedStars(0);
    setHydrated(false);
  }, [company, username]);

  useEffect(() => {
    if (company.length && username.length && !hydrated) {
      db.collection('companies')
        .doc(company)
        .collection('reviews')
        .doc(username)
        .get()
        .then(doc => {
          const oldReviewScore = (doc.exists && doc.data()![category]) || 0;
          setSavedStars(oldReviewScore);
          setHydrated(true);
        });
    }
  }, [company, username]);

  const onHoverStar = (newScore: number) => {
    setHoverStars(newScore);
  };

  const onUnhoverStar = () => {
    setHoverStars(0);
  };

  const updateAggregateScores = async (
    category: RatingCategory,
    newScore: number
  ) => {
    // Create a reference for a new rating, for use inside the transaction
    let ratingRef = db.collection('companies').doc(company);
    const oldReviewScore = await db
      .collection('companies')
      .doc(company)
      .collection('reviews')
      .doc(username)
      .get()
      .then(doc => doc.exists && doc.data()![category]);
    // In a transaction, add the new rating and update the aggregate totals
    return db.runTransaction(transaction => {
      return transaction.get(ratingRef).then(res => {
        if (!res.exists) {
          throw 'Document does not exist!';
        }

        let totalRatingsCount = res.data()!.aggregateScores[category].count;
        if (!oldReviewScore) {
          totalRatingsCount++;
        }
        let oldRatingsSum =
          res.data()!.aggregateScores[category].score *
          res.data()!.aggregateScores[category].count;
        if (oldReviewScore) {
          oldRatingsSum -= oldReviewScore;
        }
        const newAverageRating = (oldRatingsSum + newScore) / totalRatingsCount;

        transaction.set(
          ratingRef,
          {
            aggregateScores: {
              [category]: {
                count: totalRatingsCount,
                score: newAverageRating,
              },
            },
          },
          { merge: true }
        );
      });
    });
  };

  const onClickStar = async (newScore: number) => {
    setSavedStars(newScore);
    await updateAggregateScores(category, newScore);
    db.collection('companies')
      .doc(company)
      .collection('reviews')
      .doc(username)
      .set(
        {
          [category]: newScore,
        },
        { merge: true }
      );
  };

  return (
    <div className='employer-rater'>
      <div className={`stars ${savedStars > 0 ? '' : 'unscored'}`}>
        {[1, 2, 3, 4, 5].map(newScore => (
          <FontAwesomeIcon
            key={newScore}
            icon={[iconType(newScore), 'star']}
            onMouseEnter={() => onHoverStar(newScore)}
            onMouseLeave={onUnhoverStar}
            onClick={() => onClickStar(newScore)}
          />
        ))}
      </div>
      <div className='category-explanation'>
        <span className='category-title'>{category.split('-').join(' ')}</span>{' '}
        {`${ratingCategoryToText[category]}`}
      </div>
    </div>
  );
}

export default EmployerRater;
