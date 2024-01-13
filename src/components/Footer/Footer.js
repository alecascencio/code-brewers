import './Footer.css';

const Footer = () => {
  return (
    <section className='footer container'>
      <h2 className='footer-header'>codeBrewers</h2>
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
