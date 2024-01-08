import { NavLink } from "react-router-dom";
import logoReact from "../assets/react.svg"
function Navbar() {
    return (
        <nav className="shadow-lg py-3">
            <div className="container flex justify-between items-center">
                <div>
                    <img src={logoReact} alt="Logo" />
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;