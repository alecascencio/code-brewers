import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home container'>
      <h2 id='nexaminds-2'>codeBrewers</h2>
      <h2 className='home-header'>Looking for</h2>
      <h2 id='exceptional' className='home-header'>
        exceptional
      </h2>
      <h2 className='home-header'>IT candidates?</h2>
      <p className='home-paragraph'>
        We enable key connections between tech candidates and hiring managers.
      </p>
      <div>
        <Link to='/contact-us' className='work-with-us-button'>
          Work with us
        </Link>

        <a href='#our-work' className='learn-more-button'>
          Learn more
        </a>
      </div>
    </section>
  );
};

export default Home;
