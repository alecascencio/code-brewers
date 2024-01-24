import './Home.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const handleDone = () => {};

  const handleType = (text) => {};

  return (
    <section className='home container'>
      <div className='home-wrapper'>
        <h2 className='home-header'>Looking for</h2>
        <h2 className='type-header'>
          <Typewriter
            words={['exceptional', 'outstanding', 'remarkable', 'top-notch']}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
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
            onClick={(e) => {
              let element = document.getElementById('traits');
              e.preventDefault();
              element &&
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
