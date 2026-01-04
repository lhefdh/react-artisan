import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Logo from '../assets/Logo.png';

export default function Header({ onSetSearchText }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    onSetSearchText(lowerCase);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      setIsNavExpanded(false);
    }
  };

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
    if (!isNavExpanded) {
      setIsSearchExpanded(false);
    }
  };

  const closeAll = () => {
    setIsSearchExpanded(false);
    setIsNavExpanded(false);
  };

  return (
    <header id="header-container" className="navbar navbar-expand-lg w-100">
      <div className="navbar-container d-flex align-items-start container-fluid w-100 px-0">
        <NavLink to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="Logo" />
        </NavLink>
        <div className="ps-auto navbar-direction">
          <form className="d-flex" role="search">
            <input
              className="search-bar-input form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={inputHandler}
            />
            <button
              type="button"
              className="search-toggle-btn"
              onClick={toggleSearch}
              aria-controls="searchBar"
              aria-expanded={isSearchExpanded}
              aria-label="Toggle searchBar"
            >
              <i className="fa-solid fs-2 fa-magnifying-glass mt-2 mx-2"></i>
            </button>
            <button
              className="navbar-toggler mx-2"
              type="button"
              onClick={toggleNav}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavExpanded}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </form>
          <div className="inline-menu d-none d-lg-block">
            <Navbar onSetActiveContent={closeAll} />
          </div>
        </div>
      </div>

      {/* RENDER TOUJOURS les éléments, mais contrôle la visibilité avec className */}
      <div>
        {/* Barre de recherche - toujours présente mais cachée */}
        <form 
          className={`d-flex px-5 py-4 ${isSearchExpanded ? '' : 'd-none'}`}
          role="search" 
          id="searchBar"
          aria-hidden={!isSearchExpanded}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Rechercher"
            onChange={inputHandler}
            autoFocus={isSearchExpanded}
          />
          <i className="fa-solid fa-lg fa-magnifying-glass mt-4 icon"></i>
        </form>
        
        {/* Navigation mobile - toujours présente mais cachée */}
        <div 
          id="navbarSupportedContent" 
          className={isNavExpanded ? '' : 'd-none'}
          aria-hidden={!isNavExpanded}
        >
          <Navbar onSetActiveContent={closeAll} />
        </div>
      </div>
    </header>
  );
}