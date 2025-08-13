import { useState } from 'react';
import Logo from '../assets/Logo.png';



export default function Header() {
  const [activeContent, setActiveContent] = useState(null);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div class="navbar-container px-5 py-0 d-flex align-items-start container-fluid w-100 ">
        <a class="navbar-brand" href="#">
          <img class="logo" src={Logo} alt="Logo" />
        </a>
        <div className="ps-auto navbar-direction">
          <form className="d-flex" role="search">
            <input
                className="search-bar-input form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <i class="fa-solid fs-2 fa-magnifying-glass mt-2 mx-2"
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
            class="navbar-toggler mx-2"
            type="button"
            onClick={() => setActiveContent('content2')}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
          </form>
          <div className="inline-menu d-sm-none d-md-none d-lg-block">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Bâtiment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">
                  Fabrication
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {activeContent === 'content1' && (
            <form className="d-flex collapse px-5 py-4" role="search" id="searchBar">
              <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Rechercher"
              /><i 
              class="fa-solid fa-lg fa-magnifying-glass mt-4 icon"></i>
            </form>
        )}
        {activeContent === 'content2' && (
          <ul class="navbar-nav mb-2 mb-lg-0 px-5 py-4 navbar-burger-menu">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Bâtiment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">
                  Fabrication
                </a>
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

