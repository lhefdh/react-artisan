import { NavLink } from 'react-router-dom';


export default function Navbar({onSetActiveContent}) {


  return (
    <>
      <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => onSetActiveContent('')} >
                <NavLink to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >Accueil</NavLink>
              </li>
              <li className="nav-item" onClick={() => onSetActiveContent('')}>
                <NavLink to="/batiment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Bâtiment</NavLink>
              </li>
              <li className="nav-item" onClick={() => onSetActiveContent('')}>
                <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
              </li>
              <li className="nav-item" onClick={() => onSetActiveContent('')}>
                <NavLink to="/fabrication" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Fabrication</NavLink>
              </li>
            </ul>
    </>
  )
}