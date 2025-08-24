import { useLocation } from 'react-router-dom'

export default function BreadCrumb() {

const location = useLocation();
const currentPage = location.pathname === '/batiment'? 'Bâtiment'
                  : location.pathname === '/services' ? 'Services'
                  : location.pathname === '/fabrication' ? 'Fabrication' 
                  : location.pathname === '/craftsman' ? 'Votre Artisan'
                  : '';

  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumb">
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