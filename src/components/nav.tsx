import React from 'react';
import './assets/styles/App.scss';

function App() {
  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${'images/30073091.jpg'})` }}
    >
      <div className='home-body'>
        <div className='home-body-mask'>
          <h1 className='home-title'>Divergent Valley</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
