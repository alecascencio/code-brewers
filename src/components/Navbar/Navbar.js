import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const route = window.location.hash.substr(1);
    let element = document.getElementById(route);
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
  }, []);

  return (
    <section className='navbar container'>
      <div className='desktop-menu'>
        <a
          href='/'
          aria-current='page'
          className='navbar-logo-wrap w-inline-block w--current'
        >
          <img src='/img/logo-cb.png' loading='lazy' alt='cb en Logo' />
        </a>
        <div className='links'>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('about-us');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#about-us';
              }
            }}
          >
            About Us
          </a>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('traits');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#traits';
              }
            }}
          >
            Traits
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/feed/'
          >
            LinkedIn
          </a>
          <Link to='/contact-us' className='get-started-button'>
            Get Started
          </Link>
        </div>
      </div>
      <div className='mobile-menu'>
        <img src='/img/logo-cb.png' loading='lazy' alt='cb en Logo' />
        <div className='mobile-menu-toggle' onClick={toggleMenu}>
          <img
            className='mobile-menu-icon'
            src='/img/menu-burger.svg'
            alt='Menu Icon'
          />
        </div>
        {openMenu && (
          <div className='mobile-links'>
            <a
              href='/'
              onClick={(e) => {
                setOpenMenu(false);
                let element = document.getElementById('about-us');
                e.preventDefault();
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
            >
              About Us
            </a>
            <a
              href='/'
              onClick={(e) => {
                setOpenMenu(false);
                let element = document.getElementById('traits');
                e.preventDefault();
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
            >
              Traits
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/feed/'
            >
              LinkedIn
            </a>
            <Link to='/contact-us' className='get-started-button-mobile'>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
