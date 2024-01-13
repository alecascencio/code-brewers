import './Marketing1.css';
import { Link } from 'react-router-dom';

const Marketing1 = () => {
  return (
    <section className='marketing1 container'>
      <h2 className='marketing1-header'>Stay Updated With Employment Trends</h2>
      <p className='marketing1-paragraph'>
        The tech and hiring scene is ever-evolving. Stay informed about the most
        recent growth areas.
      </p>
      <div>
        <Link to='/marketing1' className='marketing1-button'>
          Read More
        </Link>
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

export default Marketing1;
