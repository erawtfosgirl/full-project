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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;