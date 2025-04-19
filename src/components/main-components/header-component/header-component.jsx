import { Link, useLocation } from "react-router-dom";
import "./header-component.css";

function HeaderComponent() {
    
    const location = useLocation();
    
    return (
        <div className="side-menu-container">
            <ul className="nav navbar-nav">
                <li>
                    <Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/01_variablesReact" ? "active" : ""}`} to="/01_variablesReact">01 Variables React</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
                </li>

                <li>
                    <Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                </li>
                
                <li>
                    <Link className={`link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
  }
  
  export default HeaderComponent;