import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className='wallpaper'>
      <h1 className='contact-mega-title'> How can we help?</h1>
      <div className='contact-background'>
        <div className='contact-container'>
          <div className='screen'>
            <div className='screen-header'>
              <div className='contact-title'>
                <span>Work With Us</span>
              </div>
              <div className='contact-subtitle'>
                Fill in the form below to chat with someone from our team
              </div>
            </div>
            <div className='screen-body-item'>
              <div className='contact'>
                <div className='contact-group'>
                  <input className='contact-line' placeholder='Name' />
                </div>
                <div className='contact-group'>
                  <input className='contact-line' placeholder='Email' />
                </div>
                <div className='contact-group'>
                  <input className='contact-line' placeholder='Phone Number' />
                </div>
                <div className='contact-group'>
                  <input className='contact-line' placeholder='Company' />
                </div>
                <div className='contact-group message'>
                  <input className='contact-line' placeholder='Your Message' />
                </div>
                <div className='contact-group buttons'>
                  <button className='contact-button'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
