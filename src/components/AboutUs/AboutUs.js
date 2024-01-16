import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className='aboutus container' id='about-us'>
      <div className='about-us-info'>
        <h2 className='about-us-header'> Built by IT Recruiters</h2>
        <p className='about-us-paragraph'>
          A tech-aligned staffing agency prioritizing results in the realm of
          technology + recruitment
        </p>
        <div>
          <Link to='/about-us' className='about-us-button'>
            About Us
          </Link>
        </div>
      </div>
      <div className='about-us-img-wrapper'>
        <img src='/img/pixel-3.jpg' alt='Our Work' className='about-us-img' />
      </div>
      <div className='section-background-desktop'>
        <div className='background-desktop'>
          <div className='overlay-wrap'>
            <div className='overlay-top'></div>
            <div className='overlay-bottom'></div>
            <div className='overlay-right'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
