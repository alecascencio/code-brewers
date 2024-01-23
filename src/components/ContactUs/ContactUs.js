import { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      const apiUrl =
        'https://better-cod-cuff.cyclic.app/send-email-codebrewers';
      const emailPayload = {
        from: 'hello@codebrewers.io',
        to: 'hello@codebrewers.io',
        subject: 'CLIENT',
        html: `<div>Name: ${formData.name}<br>Email: ${formData.email}<br>Phone Number: ${formData.phoneNumber}<br>Company: ${formData.company}<br>Message: ${formData.message}</div>`,
      };

      const response = await axios.post(apiUrl, emailPayload);
      console.log(
        'And off it goes! Your message is on its way! 🚀:',
        response.data
      );

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
        message: '',
      });
      alert('And off it goes! Your message is on its way! 🚀');
    } catch (error) {
      console.error('Error in the email matrix! Message not sent. 🕵️‍♂️:', error);
      alert('Error in the email matrix! Message not sent. 🕵️‍♂️');
    }
  };

  return (
    <>
      <Navbar />
      <section className='wallpaper'>
        <h1 className='contact-mega-title'>
          How can we <span>help?</span>
        </h1>
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
                    <input
                      className='contact-line'
                      placeholder='Name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='contact-group'>
                    <input
                      className='contact-line'
                      placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='contact-group'>
                    <input
                      className='contact-line'
                      placeholder='Phone Number'
                      name='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='contact-group'>
                    <input
                      className='contact-line'
                      placeholder='Company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='contact-group message'>
                    <input
                      className='contact-line'
                      placeholder='Your Message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='contact-group buttons'>
                    <button className='contact-button' onClick={sendEmail}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
