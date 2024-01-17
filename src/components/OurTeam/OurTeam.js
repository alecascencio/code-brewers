import './OurTeam.css';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  return (
    <section className='ourteam container'>
      <div className='blur-wrap'>
        <h2 className='ourteam-header'>Get To Know Us</h2>
        <p className='ourteam-paragraph'>
          We prioritize care. Our focus is on quality—achieving it and
          maintaining it. That's why we've embraced 'Excellence Through
          Comprehension' as our motto since the start. Our objective is to
          discover elite mexican tech talent, assist you in achieving your
          objectives, and secure the satisfaction of everyone.
        </p>
        <Link to='/contact-us' className='ourteam-button'>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
