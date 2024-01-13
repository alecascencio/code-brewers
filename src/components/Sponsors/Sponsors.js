import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className='section-integration'>
      <div className='container-large'>
        <div className='padding-global'>
          <div className='integration-wrap'>
            <div className='spacer-large'></div>
            <h2 className='heading-style-h6 text-style-allcaps'>
              Craft your data stream
            </h2>
            <div className='spacer-small'></div>
            <p className='text-align-center'>
              Access your data, wherever it resides
            </p>
            <div className='spacer-large-2'></div>
            <div className='logo-wrap'>
              <img
                src='/img/acne-control.png'
                loading='lazy'
                alt='acne-control-logo'
                className='integration-logo'
              />
              <img
                src='/img/lancaster.png'
                loading='lazy'
                alt='lancaster-logo'
                className='integration-logo'
              />
              <img
                src='/img/capra.png'
                loading='lazy'
                alt='capra-logo'
                className='integration-logo'
              />
              <img
                src='/img/floreria.png'
                loading='lazy'
                alt='floreria-logo'
                className='integration-logo'
              />
              <img
                src='/img/dali-buns.png'
                loading='lazy'
                alt='dali-buns-logo'
                className='integration-logo'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
