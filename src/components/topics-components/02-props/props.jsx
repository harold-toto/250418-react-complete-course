import HeaderComponent from "../../main-components/menu-component/menu-component";
import PropTypes from 'prop-types';

const codeExample = `
function PropsReact({
  title,
  subtitle,
  versionNumber
}) {
  
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h1>02 Props En React</h1>
        <h3>Props: Son propiedades que se le pasan a un componente para que este pueda renderizarse.</h3>

        <hr />

        <h4>Title: {title}</h4>
        <h4>Subtitle: {subtitle}</h4>
        <h4>Version Number: {versionNumber}</h4>

        <div className="code-block">
          <pre>
            <code className="language-jsx">
              {codeExample}
            </code>
          </pre>
        </div>

      </div>
    </>
  );
}

PropsReact.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  versionNumber: PropTypes.number
}

PropsReact.defaultProps = {
    versionNumber: 1,
};

export default PropsReact;`;

function PropsReact({
  title,
  subtitle,
  versionNumber
}) {
  
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h1>02 Props En React</h1>
        <h3>Props: Son propiedades que se le pasan a un componente para que este pueda renderizarse.</h3>

        <hr />

        <h4>Title: {title}</h4>
        <h4>Subtitle: {subtitle}</h4>
        <h4>Version Number: {versionNumber}</h4>

        <div className="code-block">
          <pre>
            <code className="language-jsx">
              {codeExample}
            </code>
          </pre>
        </div>

      </div>
    </>
  );
}

PropsReact.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  versionNumber: PropTypes.number
}

PropsReact.defaultProps = {
    versionNumber: 1,
};

export default PropsReact;