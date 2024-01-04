import './AboutUs.css';
import Outcome from '../AboutUs/Outcome/Outcome';
import OurTeam from '../AboutUs/OurTeam/OurTeam';
import DiveDeeper from './DiveDeeper/DiveDeepr';

const AboutUs = () => {
  return (
    <>
      <section className='about-us container'>
        <h2 className='about-us-header'>
          {' '}
          Developing a world with improved decision-making capabilities{' '}
        </h2>
        <p className='about-us-paragraph'>
          We create technology to enable organizations and individuals to gain
          profound insights into their surroundings, make informed choices, and
        </p>
      </section>
      <Outcome />
      <OurTeam />
      <DiveDeeper />
    </>
  );
};

export default AboutUs;
