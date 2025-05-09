import HeaderComponent from "../../main-components/menu-component/menu-component";

const codeExample = `
import HeaderComponent from "../../main-components/menu-component/menu-component";

function VariablesReact() {

  const variable01 = "Hola Mundo"; // String
  const variable02 = 10; // Number
  const stringFunction = () => 'String Funcion is called';

  return (
    <> //* Esto es un fragmento que es una forma de agrupar varios elementos sin agregar un nodo extra al DOM. */
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h1>01 Variables En React</h1>
        <h4>{variable01}</h4>
        <h4>{stringFunction()}</h4>
        <h4>Variable Number: {variable02}</h4>

        <div className="code-block">
          <pre>
            <code>
              {codeExample}
            </code>
          </pre>
        </div>

      </div>
    </>
  );
}

export default VariablesReact;`;

function VariablesReact() {

  const variable01 = "Hola Mundo"; // String
  const variable02 = 10; // Number
  const stringFunction = () => 'String Funcion is called'; // Function

  return (
    <> {/* Esto es un fragmento que es una forma de agrupar varios elementos sin agregar un nodo extra al DOM. */}
      {/* Esto es un fragmento que es una forma de agrupar varios elementos sin agregar un nodo extra al DOM. */}

      {/* Un componente es una funcion que retorna un elemento de React. */}
      {/* Un componente es un bloque de código que se puede reutilizar en diferentes partes de la aplicacion. */}
      <HeaderComponent></HeaderComponent>

      <div className="container">
        <h1>01 Variables En React</h1>
        <h4>{variable01}</h4>
        <h4>{stringFunction()}</h4>
        <h4>Variable Number: {variable02}</h4>

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

export default VariablesReact;