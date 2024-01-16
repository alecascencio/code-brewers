import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar container'>
      <h1>codeBrewers</h1>
      <div className='links'>
        <a href='#about-us'>About Us</a>
        <a href='#traits'>Traits</a>
        <a target='_blanck' href='https://www.linkedin.com/feed/'>
          LinkedIn
        </a>
        <a href='/contact-us' className='get-started-button'>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Navbar;
