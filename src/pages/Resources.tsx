import { Link } from 'react-router-dom';
import VerticalNav from '../components/VerticalNav';
import '../assets/styles/App.scss';

function Resources() {
  return (
    <div className='resources simple-page'>
      <h1>Resources</h1>
      <VerticalNav>
        <Link to='/resources/scripts'>Scripts</Link>
        <Link to='/resources/accommodations'>Accommodations</Link>
        <Link to='/resources/evaluate-employers'>Evaluate Employers</Link>
      </VerticalNav>
    </div>
  );
}

export default Resources;
