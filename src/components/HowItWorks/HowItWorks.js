import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className='howitworks container' id='how-it-works'>
      <h2 className='howitworks-header'>
        How it <span>works</span>
      </h2>
      <div className='who-faq_component'>
        <div className='who-faq_item'>
          <div id='node-columns' className='faq_number-wrapper'>
            <div className='faq_number'>01</div>
          </div>
          <p className='text-size-medium'>
            Click{' '}
            <a
              href='https://calendly.com/codebrewers/30min?back=1&month=2024-01'
              className='link'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>{' '}
            to set up a call with us. If there's a fit, we'll kick things off.
          </p>
        </div>
        <div className='who-faq_item'>
          <div id='node-columns' className='faq_number-wrapper'>
            <div className='faq_number'>02</div>
          </div>
          <p className='text-size-medium'>
            We carefully review all candidates to meet your criteria, including
            their English skills.
          </p>
        </div>
        <div className='who-faq_item'>
          <div id='node-columns' className='faq_number-wrapper'>
            <div className='faq_number'>03</div>
          </div>
          <p className='text-size-medium'>
            We send them to you and assist in managing the entire process until
            completion.
          </p>
        </div>
        <div className='who-faq_item'>
          <div id='node-columns' className='faq_number-wrapper'>
            <div className='faq_number'>04</div>
          </div>
          <p className='text-size-medium'>
            If you need a hand with HR, compliance, or payments, don't
            worry—we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
