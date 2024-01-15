import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar container'>
      <h1>codeBrewers</h1>
      <div className='links'>
        <a href='#'>About</a>
        <a href='#'>Services</a>
        <a href='#'>Insights</a>
        <a href='#'>Upload Resume</a>
        <a href='/contact-us' className='get-started-button'>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Navbar;
