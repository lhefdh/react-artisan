
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Results from '../components/Results';
import datas from '../datas.json'; 
import ContactForm from '../components/ContactForm';
  

export default function  Craftsman (searchText) {
  const {id} = useParams()
  const selectedCraftsman = datas.find(profile => profile.id === id)

    return (

      <main id="craftsman-container" className="d-flex flex-column align-items-start">
        <BreadCrumb selectedCraftsman={selectedCraftsman.name}/>
        {/* affichege des résultats de la recherche */}
          <Results searchText={searchText}/>
        <div className="craftsman-card-container align-self-center">
          <h2 className="craftsman-title mb-3">Consultez la Fiche de votre artisan</h2>
          <article className="card d-flex flex-column justify-content-center align-items-center">
            <div className="card-body px-5">
              <h5 className="card-title d-flex justify-content-center"><strong>{selectedCraftsman.name}</strong></h5>
              <h6 className="card-subtitle mb-2">Note: <strong>{selectedCraftsman.note}</strong></h6>
              <h6 className="card-subtitle mb-2">Spécialité: <strong>{selectedCraftsman.specialty}</strong></h6>
              <h6 className="card-subtitle mb-2">Localisation: <strong>{selectedCraftsman.location}</strong></h6>
              <p className= "text-justify">{selectedCraftsman.about}</p>
              {selectedCraftsman.website!=''? <p className= "text-justify">Pour plus d'informations sur le profil de votre artisan {selectedCraftsman.name}, nous vous infitons à visiter son Site Web: <a href="{selectedCraftsman.website}"><strong>{selectedCraftsman.website}</strong></a> </p> : ''}
              <ContactForm/>
            </div>
          </article>
        </div>
      </main>
  )
}
