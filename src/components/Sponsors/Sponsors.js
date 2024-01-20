import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className='section-integration container'>
      <h2>
        These are some of the companies that <span>trust us</span>
      </h2>
      <div className='logo-wrap'>
        <a target='_blanck' href='https://www.facebook.com/acnecontrolmx'>
          <img
            src='/img/acne-control.png'
            loading='lazy'
            alt='acne-control-logo'
            className='integration-logo'
          />
        </a>
        <img
          src='/img/lancaster.png'
          loading='lazy'
          alt='lancaster-logo'
          className='integration-logo'
        />
        <a target='_blanck' href='https://www.instagram.com/capracoffeemx/'>
          <img
            src='/img/capra-logo.png'
            loading='lazy'
            alt='capra-logo'
            className='integration-logo'
          />
        </a>
        <a target='_blanck' href='https://www.facebook.com/floreriasuspiros'>
          <img
            src='/img/floreria.png'
            loading='lazy'
            alt='floreria-logo'
            className='integration-logo'
          />
        </a>
        <a target='_blanck' href='https://www.instagram.com/dalibuns/'>
          <img
            src='/img/dali-buns.png'
            loading='lazy'
            alt='dali-buns-logo'
            className='integration-logo'
          />
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
