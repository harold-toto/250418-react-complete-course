import MenuComponent from "../../main-components/menu-component/menu-component";

function KeyboardShortCuts() {
  return (
    <>
      <MenuComponent></MenuComponent>
      <div className="container">
        <h1>Atajos Visual Studio Code.</h1>

        <ul className="key-concepts-list">
          <li><strong>Ctrl + Shift + P</strong>: Abre la paleta de comandos.</li>
          <li><strong>Ctrl + P</strong>: Abre el buscador de archivos.</li>
          <li><strong>Ctrl + K + D</strong>: Formatear el código.</li>
          <li><strong>Ctrl + K + F</strong>: Formatear el código.</li>
          <li><strong>Ctrl + K + C</strong>: Comentar el código.</li>
          <li><strong>Ctrl + K + U</strong>: Descomentar el código.</li>
          <li><strong>Ctrl + K + X</strong>: Comentar el código en bloque.</li>
          <li><strong>Ctrl + K + Y</strong>: Descomentar el código en bloque.</li>
          <li><strong>Ctrl + K + I</strong>: Muestra el tooltip de la función.</li>
          <li><strong>Ctrl + /</strong>: Comenta o descomenta la línea seleccionada.</li>
          <li><strong>Alt + Shift + F</strong>: Formatea el documento.</li>
          <li><strong>Ctrl + Space</strong>: Muestra las sugerencias de autocompletado.</li>
        </ul>

      </div>
    </>
  );
}

export default KeyboardShortCuts;