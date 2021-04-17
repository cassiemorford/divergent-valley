import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/styles/App.scss';
import '../../assets/styles/Script.scss';
import scenarios from './scenarios';

interface ScriptParams {
  scenario: 'accommodations' | 'negotiation';
}

function Script() {
  const { scenario } = useParams<ScriptParams>();
  const sections = scenarios[scenario] || [];
  const completedInitialState: boolean[] = sections.reduce(
    (completedState, _, idx) => {
      completedState[idx] = false;
      return completedState;
    },
    [] as boolean[]
  );
  const [completed, setCompleted] = useState(completedInitialState);

  const toggleCompletedForIndex = (idx: number) => {
    let newCompleted = completed.slice();
    newCompleted[idx] = !newCompleted[idx];
    setCompleted(newCompleted);
  };

  return (
    <div className='script-container'>
      {sections.map(
        ({ wrapperClasses, contentClasses, content, type }, idx) => (
          <div className={`${wrapperClasses} ${completed[idx] ? 'muted' : ''}`}>
            <div className={contentClasses}>
              {content}
              {type !== 'reminder' && (
                <button
                  className='done-button'
                  onClick={() => toggleCompletedForIndex(idx)}
                >
                  {`${completed[idx] ? 'revisit' : 'done'}`}
                </button>
              )}
            </div>
            {type !== 'reminder' && (
              <textarea
                className='notes'
                contentEditable
                placeholder='notes'
              ></textarea>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default Script;
