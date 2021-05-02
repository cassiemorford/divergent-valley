import React from 'react';
import { Link } from 'react-router-dom';

import VerticalNav from '../../components/VerticalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../assets/styles/Scripts.scss';

function Scripts() {
  return (
    <div className='scripts simple-page'>
      <h1>
        <FontAwesomeIcon icon={['fas', 'comments']} size='2x' />
        Scripts
      </h1>
      <VerticalNav>
        <Link to='/resources/scripts/negotiation'>New Job Negotiation</Link>
        <Link to='/resources/scripts/accommodations'>
          Asking for accommodations at work
        </Link>
      </VerticalNav>
    </div>
  );
}

export default Scripts;
