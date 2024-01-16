import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <section className='navbar container'>
      <div className="desktop-menu">
        <h1>codeBrewers</h1>
        <div className='links'>
          <a
            href='/'
            onClick={e => {
              let element = document.getElementById("about-us");
              e.preventDefault();
              element && element.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >About Us</a>
          <a
            href='/'
            onClick={e => {
              let element = document.getElementById("traits");
              e.preventDefault();
              element && element.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Traits
          </a>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/feed/'>
            LinkedIn
          </a>
          <a href='/contact-us' className='get-started-button'>
            Get Started
          </a>
        </div>
      </div>
      <div className="mobile-menu">
        <h1>codeBrewers</h1>
        <div
          className='mobile-menu-toggle'
          onClick={toggleMenu}
        >
          <img
            className="mobile-menu-icon"
            src="/img/menu-burger.svg"
            alt="Menu Icon" />
        </div>
        { openMenu && 
          <div className='mobile-links'>
            <a
              href='/'
              onClick={e => {
                setOpenMenu(false)
                let element = document.getElementById("about-us");
                e.preventDefault();
                element && element.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              About Us
            </a>
            <a
              href='/'
              onClick={e => {
                setOpenMenu(false)
                let element = document.getElementById("traits");
                e.preventDefault();
                element && element.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Traits
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/feed/'>
              LinkedIn
            </a>
            <a href='/contact-us' className='get-started-button-mobile'>
              Get Started
            </a>
          </div>
        }

      </div>
    </section>
  );
};

export default Navbar;
