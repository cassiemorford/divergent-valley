import React from 'react';
import { Link } from 'react-router-dom';

import './assets/styles/App.scss';

function App() {
  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${'images/30073091.jpg'})` }}
    >
      <div className='home-body'>
        <div className='home-body-mask'>
          <div className='home-content'>
            <div className='home-title'>
              <h1>Divergent Valley</h1>
            </div>
            <nav className='home-nav'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/resources'>For People with ADHD</Link>
                </li>
                <li>
                  <Link to='/research'>For Employers</Link>
                </li>
              </ul>
            </nav>
            <div className='home-explanation'>
              <div className='home-explanation-paragraph'>
                Following my ADHD diagnosis, I had trouble figuring out what{' '}
                <Link to='/resources/accommodations'>accommodations</Link> might
                be helpful,{' '}
                <Link to='/resources/scripts'>how to advocate for myself</Link>,
                and how to{' '}
                <Link to='/resources/evaluate-employers'>
                  evaluate potential employers{' '}
                </Link>
                for their friendliness to employees with ADHD.
              </div>
              <div className='home-explanation-paragraph'>
                I attended{' '}
                <a href='https://school.logicmag.io/'>logic school</a> in spring
                2021 and starting learning about grassroots change --{' '}
                <b>
                  how normal people can hold companies accountable to treating
                  their employees, their users, and the wider population
                  equitably.
                </b>
              </div>
              <div className='home-explanation-paragraph'>
                I decided to start practicing activism on a topic I know about
                personally -- by creating a space that would hold companies
                accountable for the way they treat their employees with ADHD.
              </div>

              <div className='home-explanation-paragraph'>
                My <a href='https://school.logicmag.io/'>logic school</a> peers
                have done great work on raising awareness and practicing
                activism for wider populations: check out their work <a>here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
