import './Footer.css';

const Footer = () => {
  return (
    <section className='footer container'>
      <a
        href='/'
        aria-current='page'
        className='navbar-logo-wrap w-inline-block w--current'
      >
        <img src='/img/logo-cb.png' loading='lazy' alt='cb en Logo' />
      </a>{' '}
      <div className='footer-paragraph'>
        <p>Enhancing global efficiency and effectiveness</p>
        <div className='spacer-small'></div>
        <a
          href='https://www.linkedin.com/feed/'
          target='_blank'
          rel='noopener noreferrer'
          className='link-block w-inline-block'
        >
          <img
            src='/img/LinkedIn.svg'
            loading='lazy'
            alt='linkedin-icon'
            className='icon-1x1-medium'
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Footer;
