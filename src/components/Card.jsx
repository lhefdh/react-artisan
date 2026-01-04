import { NavLink } from 'react-router-dom';


export default function Card({item,id}) {


  return (
    <>
      <NavLink to={`/craftsman/${id}`} className="craftsman-card d-flex flex-column justify-content-center card col-8 col-md-5 col-lg-3 mt-2 mx-1">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-center"><strong>{item.name}</strong></h4>
          <h5 className="card-subtitle mb-2 text-muted">Spécialité: <strong>{item.specialty}</strong></h5>
          <h5 className="card-subtitle mb-2 text-muted">Note: <strong>{item.note}</strong></h5>
          <h5 className="card-subtitle mb-2 text-muted">Localisation: <strong>{item.location}</strong></h5>
        </div>
      </NavLink>
    </>
  )
}