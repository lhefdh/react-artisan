import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';


export default function Footer() {

  return (
    <div id="footer-container" className="d-flex flex-column align-items-center">
      <div className="footer-informations d-flex flex-row col-12 justify-content-center flex-wrap">
        <NavLink to="/" className="footer-logo-container col-xs-12 col-sm-12 col-md-12 col-sm-12 col-xs-12 col-lg-3 me-xs-auto me-sm-auto me-md-auto">
          <img className="footer-logo" src={Logo} alt="Logo"/>
        </NavLink >
        <div className="col-xs-9 col-sm-9 col-md-3 col-lg-2 px-0 mx-0">
          <h5>Conseil régional</h5>
          <h5>Auvergne-Rhône-Alpes</h5>
        </div>
        <div id="footer-vertical-line-address" className="footer-vl"></div> 
        <div className="col-xs-9 col-sm-9 col-md-5 col-lg-3 px-0 mx-0">
          <hr id="footer-horizontal-line-address"/>
          <h5><strong>Lyon</strong></h5>
          <p>101 cours Charlemagne
            <br/>CS 20033
            <br/>69269 LYON CEDEX 02
            <br/>France
            <br/>Ouvert du lundi au jeudi de 8h30 à 12h30 et de 13h30 à 17h
            <br/>Le vendredi de 8h30 à 12h30 et de 13h30 à 16h.
          </p>
          <p><a href="tel:33426734000" target="_blank"><span className="">+33 (0)4 26 73 40 00</span></a>
            <br />Accueil téléphonique du lundi au vendredi de 8h30 à 17h
          </p>
        </div>
        <div id="footer-vertical-line-legal-notices" className="footer-vl"></div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-3 px-0 mx-0">
          <hr id="footer-horizontal-line-legal-notices"/> 
          <ul className="footer-ul">
            <li className="footer-li">Mentions légales</li>
            <li className="footer-li">Données personnelles</li>
            <li className="footer-li">Accessibilité</li>
            <li className="footer-li">Presse</li>
            <li className="footer-li">Marchés publics</li>
            <li className="footer-li">Venir à la Région</li>
            <li className="footer-li">Contacts</li>
            <li className="footer-li">Politique des cookies</li>
          </ul>
        </div>
      </div>
      <div className="socials w-100 d-flex flex-column align-items-center">
        <hr className="col-9"/>
        <ul className="p-1 m-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-instagram pe-4 fs-2"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-twitter pe-4 fs-2"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-linkedin pe-4 fs-2"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-facebook pe-4 fs-2"/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-youtube pe-4 fs-2"/>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <li className="fa-brands fa-whatsapp pe-4 fs-2"/>
          </a>
        </ul>
      </div>
    </div>
  )
}
