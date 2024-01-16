import './OurTeam.css';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  return (
    <section className='ourteam container'>
      <div className='blur-wrap'>
        <h2 className='ourteam-header'>Get To Know Us</h2>
        <p className='ourteam-paragraph'>
          We are a team of IT recruiters who are passionate about helping you
          find the right talent for your business. We'll provide your business
          with the highest quality IT talent to help you meet your goals.
        </p>
        <Link to='/contact-us' className='ourteam-button'>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
