import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/slurm">Slurm</NavLink>
          <NavLink className='link' to="/bachelor-chow">Bachelor Chow</NavLink>
          <NavLink className='link' to="/popplers">Popplers</NavLink>
        </nav>
    )
}

export default Navbar