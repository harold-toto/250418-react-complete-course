import HeaderComponent from "../../components/main-components/menu-component/menu-component";

function HomePage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="container">
        <h1>Basic Concepts Course React.</h1>
        <p>This is the main page of the application.</p>

        <h2>Key React Concepts</h2>
        <ul className="key-concepts-list">
          <li>
            <strong><a href="https://react.dev/learn/your-first-component" target="_blank" rel="noopener noreferrer">Components:</a></strong> Reusable building blocks of the UI. They manage their own state and can be composed together.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" rel="noopener noreferrer">JSX:</a></strong> A syntax extension to JavaScript that allows you to write HTML-like structures within your JavaScript code.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/state-a-components-memory" target="_blank" rel="noopener noreferrer">State:</a></strong>  A plain JavaScript object that represents the data that can change over time.  Changes to state trigger re-rendering.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noopener noreferrer">Props:</a></strong>  Short for "properties," these are read-only values passed from a parent component to a child component.
          </li>
          <li>
            <strong><a href="https://legacy.reactjs.org/docs/react-component.html#mounting" target="_blank" rel="noopener noreferrer">Lifecycle Methods:</a></strong> (For class components) Methods that allow you to run code at specific points in a component's lifecycle (e.g., when it's mounted, updated, or unmounted). Consider using hooks in functional components instead.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/javascript-in-react-with-es6" target="_blank" rel="noopener noreferrer">Hooks:</a></strong> (For functional components) Functions that let you "hook into" React state and lifecycle features from functional components. Examples include `useState`, `useEffect`, `useContext`.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/conditional-rendering" target="_blank" rel="noopener noreferrer">Conditional Rendering:</a></strong>  Displaying different content based on certain conditions.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/rendering-lists" target="_blank" rel="noopener noreferrer">Lists and Keys:</a></strong>  When rendering lists of elements, each element needs a unique "key" prop to help React efficiently update the DOM.
          </li>
          <li>
            <strong><a href="https://react.dev/learn/responding-to-events" target="_blank" rel="noopener noreferrer">Events:</a></strong>  React provides a way to handle user interactions (e.g., clicks, form submissions) through event handlers.
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;