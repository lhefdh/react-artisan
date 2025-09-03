
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Logo from '../assets/Logo.png';

export default function Header({ onSetSearchText}) {

  const [activeContent, setActiveContent] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    onSetSearchText(lowerCase);
  };




  return (
    <header id="header-container" className="navbar navbar-expand-lg w-100">
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
          <div className="inline-menu d-none d-lg-block">
            <Navbar onSetActiveContent={setActiveContent}/>
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
              onChange={inputHandler}
            /><i 
            className="fa-solid fa-lg fa-magnifying-glass mt-4 icon"></i>
          </form>
        )}
        {activeContent === 'content2' && (
          <Navbar onSetActiveContent={setActiveContent}/>
        )}
        {!activeContent && (
          <div></div>
        )}
      </div>
    </header>
  )
}

