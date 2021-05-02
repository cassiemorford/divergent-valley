import { useState } from 'react';
import '../../assets/styles/App.scss';
import EmployerRater from './EmployerRater';
import { rateList } from './EvaluateEmployerTypes';

interface EvaluateEmployerFormProps {
  company: string;
}

function EvaluateEmployersForm({ company }: EvaluateEmployerFormProps) {
  const [username, setUsername] = useState('cass');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='evaluate-employers-form'>
      {collapsed && (
        <button
          className='review-collapse-button'
          onClick={() => setCollapsed(false)}
        >
          open review section
        </button>
      )}
      {!collapsed && (
        <>
          <div className='review-section-header'>
            <h2>Submit your Ratings</h2>
            <input
              type='text'
              value={username}
              onChange={ev => setUsername(ev.target.value)}
            />
            <button
              className='review-collapse-button'
              onClick={() => setCollapsed(true)}
            >
              collapse review section
            </button>
          </div>

          {rateList.map(category => (
            <EmployerRater
              key={category}
              company={company}
              category={category}
              username={username}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default EvaluateEmployersForm;
