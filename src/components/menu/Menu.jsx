import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Invoice</NavLink></li>
                <li><NavLink to="/history">History</NavLink></li>
            </ul>
        </nav>  
    )
}

export default Menu