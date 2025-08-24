
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import datas from '../datas.json'; 
import ContactForm from '../components/ContactForm';
  

export default function  Craftsman () {
  const {id} = useParams()
  const selectedCraftsman = datas.find(profile => profile.id === id)

    return (
    <>
      <div id="craftsman-container">
        <BreadCrumb/>
        <h2 className="craftsman-title">Consultez la Fiche de votre artisan</h2>
        <div className="card d-flex flex-column justify-content-center align-items-center">
          
          <div className="card-body px-5">
            <h5 className="card-title d-flex justify-content-center"><strong>{selectedCraftsman.name}</strong></h5>
            <h6 className="card-subtitle mb-2">Note: <strong>{selectedCraftsman.note}</strong></h6>
            <h6 className="card-subtitle mb-2">Spécialité: <strong>{selectedCraftsman.specialty}</strong></h6>
            <h6 className="card-subtitle mb-2">Localisation: <strong>{selectedCraftsman.location}</strong></h6>
            <p className= "text-justify">{selectedCraftsman.about}</p>
            {selectedCraftsman.website!=''? <p className= "text-justify">Pour plus d'informations sur le profil de votre artisan {selectedCraftsman.name}, nous vous infitons à visiter son Site Web: <strong>{selectedCraftsman.website}</strong></p> : ''}
            <ContactForm/>
          </div>
        </div>
      </div>
      
    </>
  )
}
