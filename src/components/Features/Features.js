import './Features.css';

const Features = () => {
  return (
    <section className='features container' id='traits'>
      <h2 className='features-header'>Features</h2>
      <div className='features-paragraph'>
        <p>
          <img
            className='gen-icon'
            src='/img/adaptable-schema.svg'
            alt='a-icon'
          />
          <span className='bullet-text'>
            Service and Delivery Distinction.{' '}
          </span>
          At codeBrewers, everything – our structure, culture, and business
          approach – revolves around providing an unparalleled customer
          experience and delivering outstanding business results.
        </p>

        <p>
          <img
            className='gen-icon'
            src='/img/tech-and-hiring.svg'
            alt='b-icon'
          />
          <span className='bullet-text'>
            Proven International Performance.{' '}
          </span>
          The tech and hiring scene is ever-evolving. Stay informed about the
          most recent growth areas.
        </p>

        <p>
          <img className='gen-icon' src='/img/incorporable.svg' alt='c-icon' />
          <span className='bullet-text'>
            Top-Tier Talent Acquisition Ratio.{' '}
          </span>
          The significance of Talent Acquisition holds utmost importance at
          codeBrewers, and it stands out as one of our proudest KPIs.{' '}
        </p>

        <p>
          <img className='gen-icon' src='/img/universal-api.svg' alt='d-icon' />
          <span className='bullet-text'>
            Exclusive Repository of Inactive IT Candidates.{' '}
          </span>
          At codeBrewers, we center our approach around people, nurturing
          lasting connections. After all, it's the power of individual potential
          that propels us into the future.
        </p>
      </div>
    </section>
  );
};

export default Features;
