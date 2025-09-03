
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/Logo.png';

export default function Header({ onSetSearchText}) {

  const [activeContent, setActiveContent] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    onSetSearchText(lowerCase);
  };




  return (
    <nav id="header-container" className="navbar navbar-expand-lg w-100">
      <div className="navbar-container d-flex align-items-start container-fluid w-100 ">
        <NavLink to="/" className="navbar-brand " >
          <img className="logo" src={Logo} alt="Logo" />
        </NavLink>
        <div className="ps-auto navbar-direction">
          <form className="d-flex" role="search" >
            <input
                className="search-bar-input form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={inputHandler}
            />
            <i className="fa-solid fs-2 fa-magnifying-glass mt-2 mx-2"
            type="button" 
            onClick={() => setActiveContent('content1')}
            data-bs-toggle="collapse"
            data-bs-target="#searchBar"
            aria-controls="searchBar"
            aria-expanded="false"
            aria-label="Toggle searchBar"
            >
            </i>
            <button
            className="navbar-toggler mx-2"
            type="button"
            onClick={() => setActiveContent('content2')}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
          </form>
          <div className="inline-menu d-sm-none d-md-none d-lg-block">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/batiment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Bâtiment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fabrication" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Fabrication</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {activeContent === 'content1' && (
          <form className="d-flex collapse px-5 py-4" role="search" id="searchBar">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher"
            /><i 
            className="fa-solid fa-lg fa-magnifying-glass mt-4 icon"></i>
          </form>
        )}
        {activeContent === 'content2' && (
          <ul className="navbar-nav mb-2 mb-lg-0 px-5 py-4 navbar-burger-menu">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/batiment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Bâtiment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fabrication" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Fabrication</NavLink>
            </li>
          </ul>
        )}
        {!activeContent && (
          <div></div>
        )}
      </div>
    </nav>
  )
}

