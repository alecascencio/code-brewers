import './Features.css';

const Features = () => {
  return (
    <section className='features container'>
      <h2 className='features-header'>Features</h2>
      <div className='features-paragraph'>
        <p>
          <img class='gen-icon' src='/img/adaptable-schema.svg' alt='a-icon' />
          <span class='bullet-text'>Adaptable schema. </span>
          Modify your data model whenever needed, without altering your data
          warehouse or other foundational data resources.
        </p>

        <p>
          <img class='gen-icon' src='/img/tech-and-hiring.svg' alt='b-icon' />
          <span class='bullet-text'>
            The tech and hiring scene is ever-evolving.
          </span>
          The tech and hiring scene is ever-evolving. Stay informed about the
          most recent growth areas.
        </p>

        <p>
          <img class='gen-icon' src='/img/incorporable.svg' alt='c-icon' />
          <span class='bullet-text'>Incorporable object perspectives. </span>
          Integrate a view into any internal tool or public website.
        </p>

        <p>
          <img class='gen-icon' src='/img/universal-api.svg' alt='d-icon' />
          <span class='bullet-text'>Universal API Access. </span>
          Utilize your data model anywhere; access any object, document, or
          query through the API.
        </p>

        <p>
          <img class='gen-icon' src='/img/codeless-data.svg' alt='e-icon' />
          <span class='bullet-text'>Codeless data model creation. </span>
          Shape your business model in hours, not weeks.
        </p>

        <p>
          <img class='gen-icon' src='/img/protected.svg' alt='f-icon' />
          <span class='bullet-text'>Protected and confidential. </span>
          Operate the entirety of CodeBrewers within your own cloud
          infrastructure or in a dedicated private area on ours.
        </p>

        <p>
          <img class='gen-icon' src='/img/authorized.svg' alt='g-icon' />
          <span class='bullet-text'>Completely Authorized. </span>
          End-users and LLMs have row and column-level permissions.
        </p>

        <p>
          <img class='gen-icon' src='/img/logging-trails.svg' alt='a-icon' />
          <span class='bullet-text'>Logging trails. </span>
          Comprehensive records for data access, schema modifications, and all
          other activities.
        </p>
      </div>
    </section>
  );
};

export default Features;
