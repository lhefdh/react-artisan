import Logo from '../assets/Logo.png';


export default function Footer() {

  return (
    <div id="footer-container" className="d-flex flex-column align-items-center">
      <div className="footer-informations">
        <a class="navbar-brand col-9 pe-auto" href="#">
          <img className="footer-logo" src={Logo} alt="Logo"/>
        </a>
        <div className=" d-flex flex-row justify-content-center flex-wrap">
          <div className="d-flex flex-column align-items-center col-xs-9 col-sm-9 col-md-3 col-lg-3 px-0 mx-0">
            <h5>Conseil régional</h5>
            <h5>Auvergne-Rhône-Alpes</h5>
          </div>
          <div id="footer-vertical-line-address" className="footer-vl"></div> 
          <div className="col-xs-9 col-sm-9 col-md-5 col-lg-3 px-0 mx-0">
            <hr id="Footer-horizontal-line-address"/>
            <h5><strong>Lyon</strong></h5>
            <p>101 cours Charlemagne
              <br/>CS 20033
              <br/>69269 LYON CEDEX 02
              <br/>France
              <br/>Ouvert du lundi au jeudi de 8h30 à 12h30 et de 13h30 à 17h
              <br/>Le vendredi de 8h30 à 12h30 et de 13h30 à 16h.
            </p>
            <p><a href="tel:33426734000" target="_blank"><span class="">+33 (0)4 26 73 40 00</span></a>
              <br />Accueil téléphonique du lundi au vendredi de 8h30 à 17h
            </p>
          </div>
          <div id="footer-vertical-line-legal-notices" className="footer-vl"></div>
          
          <div class="col-xs-9 col-sm-9 col-md-9 col-lg-3 px-0 mx-0">
            <hr id="Footer-horizontal-line-legal-notices"/> 
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
      </div>
      <div className="socials w-100 d-flex flex-column align-items-center">
        <hr className="col-9"/>
        <ul className="p-1 m-1">
          <li className="fa-brands fa-instagram pe-4 fs-2"/>
          <li className="fa-brands fa-twitter pe-4 fs-2"/>
          <li className="fa-brands fa-linkedin pe-4 fs-2"/>
          <li className="fa-brands fa-facebook pe-4 fs-2"/>
          <li className="fa-brands fa-youtube pe-4 fs-2"/>
          <li className="fa-brands fa-whatsapp pe-4 fs-2"/>
        </ul>
      </div>
    </div>
  )
}
