import './GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className='getstarted container'>
      <div className='getstarted-overlay'></div>
      <div className='getstarted-content-wrapper'>
        <h2 className='getstarted-header'>Ready to Take the Next Step?</h2>
        <p className='getstarted-paragraph'> Allow us to simplify your life.</p>
        <div>
          <Link to='/contact-us' className='letstalk-button'>
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
