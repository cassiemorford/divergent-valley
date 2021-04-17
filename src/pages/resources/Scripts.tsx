import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/App.scss';

function Scripts() {
  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${'images/30073091.jpg'})` }}
    >
      <h1>Scripts</h1>
      <Link to='/resources/script/negotiation'>Negotiation</Link>
      <Link to='/resources/script/accommodations'>
        Asking for accommodations at work
      </Link>
    </div>
  );
}

export default Scripts;
