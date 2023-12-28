import './Features.css';

const Features = () => {
  return (
    <section className='features container'>
      <h2 className='features-header'>Features</h2>
      <div className='features-paragraph'>
        <p>
          Adaptable schema. Modify your data model whenever needed, without
          altering your data warehouse or other foundational data resources.
        </p>
        <p>
          The tech and hiring scene is ever-evolving. Stay informed about the
          most recent growth areas.
        </p>
        <p>
          Incorporable object perspectives. Integrate a view into any internal
          tool or public website
        </p>
        <p>
          Universal API Access. Utilize your data model anywhere; access any
          object, document, or query through the API
        </p>
      </div>
      <div className='features2-paragraph'>
        <p>
          Codeless data model creation. Shape your business model in hours, not
          weeks.
        </p>
        <p>
          Protected and confidential. Operate the entirety of CodeBrewers within
          your own cloud infrastructure or in a dedicated private area on ours.
        </p>
        <p>
          Completely Authorized. End-users and LLMs have row and column-level
          permissions.
        </p>
        <p>
          Logging trails. Comprehensive records for data access, schema
          modifications, and all other activities.
        </p>
      </div>
    </section>
  );
};

export default Features;
