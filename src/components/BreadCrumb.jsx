// Ce hook permet d'accéder aux informations sur l'URL actuelle
import { useLocation } from 'react-router-dom'

export default function BreadCrumb({selectedCraftsman}) {

const location = useLocation();
// Détermine le nom de la page actuelle en se basant sur le chemin (pathname)
// s'il ne correspond à aucune page, le nom de la page sera la valeur du selectedCraftsman
const currentPage = location.pathname === '/batiment'? 'Bâtiment'
                  : location.pathname === '/services' ? 'Services'
                  : location.pathname === '/fabrication' ? 'Fabrication' 
                  : location.pathname === '/craftsman' ? 'Votre Artisan'
                  : selectedCraftsman;

  return (
    <>
      <div className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Accueil</li>
          <li className="breadcrumb-item">Ma Région</li>
          <li className="breadcrumb-item">Vie Institutionnelle</li>
          <li className="breadcrumb-item">Trouve Ton Artisan</li>
          {location.pathname!='/' ? <li className="breadcrumb-item">{currentPage}</li> : ''}
        </ol>
      </div>
    </>
  )
}