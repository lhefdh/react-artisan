


export default function Card({item}) {


  return (
    <>
      <div className="card d-flex flex-column justify-content-center card col-sm-8 col-md-5 col-lg-3 mt-2 mx-1">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center"><strong>{item.name}</strong></h5>
          <h6 className="card-subtitle mb-2 text-muted">Spécialité: <strong>{item.specialty}</strong></h6>
          <h6 className="card-subtitle mb-2 text-muted">Note: <strong>{item.note}</strong></h6>
          <h6 className="card-subtitle mb-2 text-muted">Localisation: <strong>{item.location}</strong></h6>
        </div>
      </div>
    </>
  )
}