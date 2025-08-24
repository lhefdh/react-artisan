
export default function ContactForm() {


  return (
    <>
        <div className="d-flex flex-row justify-content-center">
          <div className="row col-sm-12 col-md-10 col-lg-8  g-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input type="text" placeholder='Prénom' className="form-control" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input type="text" placeholder='Nom' className="form-control" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input type="text" placeholder='E-mail' className="form-control" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input type="text" placeholder='Téléphone' className="form-control" />
            </div>
            <div className="col-12">
              <textarea className="form-control w-100" placeholder="Message"  rows="3" ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary">Envoyer</button>
            </div>
            
          </div>
        </div>
    </>
  )
}