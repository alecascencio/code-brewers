import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className='sponsors container'>
      <div className='logo-wrap'>
        <img
          className='logo'
          src={require('../../img/CAPRA.png')}
          alt='capra-logo'
        />
      </div>
    </section>
  );
};

export default Sponsors;
