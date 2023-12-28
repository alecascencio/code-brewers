import './OurWork.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section id='our-work' className='aboutus container'>
      <h2 className='about-us-header'> Built by IT Recruiters</h2>
      <p className='about-us-paragraph'>
        {' '}
        A tech-aligned staffing agency prioritizing results in the realm of
        technology + recruitment
      </p>
      <div>
        <Link to='/about-us' className='about-us-button'>
          About Us
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;