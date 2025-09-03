import  { useState} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Results from '../components/Results';
import ContactForm from '../components/ContactForm';
import { NavLink } from 'react-router-dom';



export default function Home({craftsman, sortedData, onSetCraftsman, searchText}) {

const [category, setCategory]=useState('');



      
 const handleCategory =(e)=>setCategory(e.target.value)
  // pour exclure les doublons dans la liste (select)
  const uniqueData = Array.from(new Map(sortedData.map(profile => [profile.category, profile])).values());
  const FilteredProfiles = sortedData.filter(profile =>
    profile.category === category);
  


  const handleCraftsman = (e) => {
      onSetCraftsman(sortedData.find(profile => profile.name === (e.target.getAttribute('value'))))
  };

  
    

  const clearchoices =()=>{
    setCategory('');
    onSetCraftsman('');
  }


  return (
    
    <div id="home-container">
      <BreadCrumb/>
      <Results searchText={searchText} sortedData={sortedData}/>
      <section>
        <h1>Comment trouver mon artisan?</h1>
        <label>
        {(category === '')? <h3 >1. Choisissez la catégorie d’artisanat</h3> : <h3 >1. Vous avez choisit la catégorie "<strong>{category}</strong>"</h3>}
        
          {(craftsman === '') && (category === '') && <select className="btn btn-secondary dropdown-toggle" onChange={handleCategory} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
            <option value="">--Choisissez la catégorie--</option>
            {uniqueData.map((data)=>(<option key={data.category} value={data.category}>{data.category}</option>))}
          </select>}
        </label>
        {(craftsman ==='')? <h3>2. Choisissez votre artisan {category && `dans la catégorie "${category}"`}</h3> : <h3 >2. L'artisan choisit est:</h3>}
        
        {(category && (craftsman === '')) &&
        <div className="d-flex justify-content-center ">
          <div className="card col-sm-8 col-md-6 col-lg-4">
            <div className="card-body ">
              {FilteredProfiles.map((item,id)=>(
              <h5 className="card-title craftsman-list d-flex justify-content-center" onClick={handleCraftsman} value={item.name} key={id}>{item.name}</h5>))
              }
            </div>
          </div>
        </div>}
        {craftsman &&
        <div className="d-flex justify-content-center"  >
          <NavLink to={`/craftsman/${craftsman.id}`} className="card col-sm-8 col-md-6 col-lg-4" onClick={clearchoices}  value={craftsman.name}>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center"><strong>{craftsman.name}</strong></h5>
              <h6 className="card-subtitle mb-2 text-muted">Spécialité: <strong>{craftsman.specialty}</strong></h6>
              <h6 className="card-subtitle mb-2 text-muted">Note: <strong>{craftsman.note}</strong></h6>
              <h6 className="card-subtitle mb-2 text-muted">Localisation: <strong>{craftsman.location}</strong></h6>
            </div>
          </NavLink>
        </div>
        }

        <h3>3. Contactez Votre Artisan</h3>
        {craftsman && 
        <div className="d-flex flex-column align-items-center py-5">
          <h4 className="px-0 mx-0">Entrez en contact avec votre artisan <strong>{craftsman.name}</strong></h4>
          <ContactForm/>
          <div className="d-flex justify-content-end">
            <button type="button" onClick={clearchoices} className="btn btn-primary">Refaire votre choix</button>
          </div>
        </div>}
        <h3>4. Une réponse sera apportée sous 48h.</h3>
      </section>      
      <hr/>
      <section>
        <h2>Nos trois champions du mois</h2>
        <div className="d-flex flex-row justify-content-evenly flex-wrap">
          {sortedData.slice(0, 3).map((item,id) => (
          <NavLink to={`/craftsman/${item.id}`} className="card col-sm-8 col-md-5 col-lg-3 mt-2" onClick={clearchoices} value={item.name} key={id}>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center"><strong>{item.name}</strong></h5>
              <h6 className="card-subtitle mb-2 text-muted">Spécialité: <strong>{item.specialty}</strong></h6>
              <h6 className="card-subtitle mb-2 text-muted">Note: <strong>{item.note}</strong></h6>
              <h6 className="card-subtitle mb-2 text-muted">Localisation: <strong>{item.location}</strong></h6>
            </div>
          </NavLink>
            ))}
        </div>
      </section>
      
    </div>
  )
}


