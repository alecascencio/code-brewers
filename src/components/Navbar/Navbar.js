import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar container'>
      <h1>codeBrewers</h1>
      <div className='links'>
        <a href='/about-us'>About</a>
        <a href='/create'>Services</a>
        <a href='/create'>Insights</a>
        <a href='/create'>Uplaod Resume</a>
        <a href='/contact-us' className='get-started-button'>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Navbar;
