import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className='aboutus container' id='about-us'>
      <div className='about-us-info'>
        <h2 className='about-us-header'>
          Built by IT <span>Recruiters</span>
        </h2>
        <p className='about-us-paragraph'>
          CodeBrewers is a high-performing and leading IT staffing agency
          crafted by experienced recruiters. Our focus is on delivering results
          efficiently, adapting swiftly to the evolving demands of today's tech
          landscape.
        </p>
        <div className='about-us-link'>
          <a
            href='/'
            className='about-us-button'
            onClick={(e) => {
              let element = document.getElementById('traits');
              e.preventDefault();
              element &&
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            Our Highlights
          </a>
        </div>
      </div>
      <div className='about-us-img-wrapper'>
        <img src='/img/pixel-3.jpg' alt='Our Work' className='about-us-img' />
      </div>
      <div className='section-background-desktop'>
        <div className='background-desktop'>
          <div className='overlay-wrap'>
            <div className='overlay-top'></div>
            <div className='overlay-bottom'></div>
            <div className='overlay-right'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
