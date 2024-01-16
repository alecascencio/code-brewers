import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home container'>
      <div className='home-wrapper'>
        <h2 id='header-2'>codeBrewers</h2>
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
          <a
            href='/'
            className='learn-more-button'
            onClick={e => {
              let element = document.getElementById("traits");
              e.preventDefault();
              element && element.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
