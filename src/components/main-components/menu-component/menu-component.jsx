import { Link, useLocation } from "react-router-dom";
import "./menu-component.css";

function MenuComponent() {
    
    const location = useLocation();
    
    return (
        <div className="side-menu-container">
            <ul className="nav navbar-nav">
                <li>
                    <Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/00-key-board-shortcuts" ? "active" : ""}`} to="/00-key-board-shortcuts">00 Keyboard Shortcuts</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/01_variablesReact" ? "active" : ""}`} to="/01_variablesReact">01 Variables React</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/02_propsReact" ? "active" : ""}`} to="/02_propsReact">02 Props React</Link>
                </li>
            </ul>
        </div>
    );
  }
  
  export default MenuComponent;