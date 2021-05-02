import { useState, useEffect } from 'react';
import db from '../../firebase';
import '../../assets/styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface EvaluateEmployerReviewsProps {
  company: string;
}

function EvaluateEmployersReviews({ company }: EvaluateEmployerReviewsProps) {
  const [aggregateScores, setAggregateScores] = useState({});

  useEffect(() => {
    if (company && !Object.entries(aggregateScores).length) {
      db.collection('companies')
        .doc(company)
        .get()
        .then(querySnapshot => {
          setAggregateScores(
            (querySnapshot &&
              querySnapshot.data() &&
              querySnapshot.data()!.aggregateScores) ||
              {}
          );
        });
    }
  }, [company]);

  return (
    <div className='evaluate-employers-reviews'>
      <h1 className='evaluate-employers-review-header'>
        Aggregate Results for this Company
      </h1>
      {!Object.entries(aggregateScores).length && <div>No reviews yet</div>}
      {Object.entries(aggregateScores).length &&
        Object.entries(aggregateScores).map(
          ([category, value]: [string, any]) => {
            const percent = (value.score / 5) * 100;
            return (
              <div key={category} className='evaluate-employers-review'>
                <p>{category.split('-').join(' ')}</p>
                <div
                  className={`stars-wrapper`}
                  style={{
                    clipPath: `polygon(0 0, 0 100%, ${percent}% 100%, ${percent}% 0)`,
                  }}
                >
                  <div className={`stars`}>
                    {[1, 2, 3, 4, 5].map(() => (
                      <FontAwesomeIcon icon={['fas', 'star']} />
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}

export default EvaluateEmployersReviews;
