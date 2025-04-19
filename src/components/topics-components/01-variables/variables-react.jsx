import HeaderComponent from "../../main-components/header-component/header-component";

function VariablesReact() {

  const variable01 = "Hola Mundo"; // String

  return (
    <>
      {/* Un componente es un bloque de código que se puede reutilizar en diferentes partes de la aplicacion. */}
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h1>01 Variables En React</h1>
        <h4> {variable01} </h4>
      </div>
    </>
  );
}

export default VariablesReact;