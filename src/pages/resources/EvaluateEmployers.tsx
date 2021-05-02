import { useState, useEffect } from 'react';
import db from '../../firebase';
import '../../assets/styles/EvaluateEmployers.scss';
import EvaluateEmployersForm from './EvaluateEmployersForm';
import EvaluateEmployersReviews from './EvaluateEmployersReviews';
import EmployerIcon from './EmployerIcon';

function EvaluateEmployers() {
  const [companies, setCompanies] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  useEffect(() => {
    if (companies.length === 0) {
      db.collection('companies')
        .get()
        .then(querySnapshot => {
          let newCompanies: string[] = [];
          querySnapshot.forEach(doc => {
            newCompanies.push(doc.data().name);
          });
          setCompanies(newCompanies);
          setSelectedCompany(newCompanies[0]);
        })
        .catch(error => console.error(error));
    }
    //  else {
    //   companies.forEach(co => {
    //     db.collection('companies')
    //       .doc(co)
    //       .set({
    //         name: co,
    //         aggregateScores: {
    //           'manager-support': { score: 0, count: 0 },
    //           'working-hours-flexibility': { score: 0, count: 0 },
    //           'information-dissemination': { score: 0, count: 0 },
    //           'performance-reviews': { score: 0, count: 0 },
    //           accommodations: { score: 0, count: 0 },
    //         },
    //       });
    //   });
    // }
  }, []);

  const changeSelectedCompany = (ev: any) => {
    setSelectedCompany(ev.target.value);
  };

  return (
    <div className='evaluate-employers simple-page'>
      <h1 className='evaluate-employers-header'>
        <EmployerIcon company={selectedCompany} />
        Evaluate{' '}
        <select value={selectedCompany} onChange={changeSelectedCompany}>
          <optgroup>
            {companies.map((company: string) => (
              <option value={company} key={company}>
                {company}
              </option>
            ))}
          </optgroup>
        </select>
      </h1>

      <EvaluateEmployersForm company={selectedCompany} />
      <EvaluateEmployersReviews company={selectedCompany} />
    </div>
  );
}

export default EvaluateEmployers;
