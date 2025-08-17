import React, { useState, useEffect } from 'react';
import datas from '../datas.json'



export default function Home() {
  const [category, setCategory]=useState('');
  const [craftsman, setCraftsman]=useState('');
  const [classement, setClassement] = useState([]);

    useEffect(() => {

    // Trie les données par la clé "note" (par exemple)
    const sortedClassement = datas.sort((a, b) => b.note - a.note); // Tri décroissant

    setClassement(sortedClassement);
  }, []);
    const handleCategory =(e)=>setCategory(e.target.value)
 
  // pour exclure les doublons dans la liste (select)
  const uniqueData = Array.from(new Map(datas.map(profile => [profile.category, profile])).values());
  const FilteredProfiles = datas.filter(profile =>
    profile.category === category);
  const handleCraftsman = (e)=>setCraftsman(datas.filter(profile => profile.name === e.target.getAttribute('value')))
  const clearchoices =()=>{
    setCategory('');
    setCraftsman('');
  }
  


  return (
    
    <div className="home-container">

      <div className="breadcrumb" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Accueil</li>
          <li class="breadcrumb-item">Ma Région</li>
          <li class="breadcrumb-item">Vie Institutionnelle</li>
          <li class="breadcrumb-item disabled">Trouve Ton Artisan</li>
        </ol>
      </div>
      <h1>Comment trouver mon artisan?</h1>
      <label>
      {(category ==='')? <h3 >1. Choisissez la catégorie d’artisanat</h3> : <h3 >1. Vous avez choisit la catégorie "<strong>{category}</strong>"</h3>}
      
        {(craftsman === '') && <select class="btn btn-secondary dropdown-toggle" onChange={handleCategory} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
          <option value="">--Choisissez la catégorie--</option>
          {uniqueData.map((data)=>(<option key={data.category} value={data.category}>{data.category}</option>))}
        </select>}
      </label>
      {(craftsman ==='')? <h3>2. Choisissez votre artisan {category && `dans la catégorie "${category}"`}</h3> : <h3 >2. L'artisan choisit est:</h3>}
      
      {(category && (craftsman === '')) &&
      <div className="d-flex justify-content-center">
        <div className="card col-sm-8 col-md-6 col-lg-4">
          <div class="card-body">
            {FilteredProfiles.map((data,id)=>(
            <h5 class="card-title" onClick={handleCraftsman} value={data.name} key={id}>{data.name}</h5>))
            }
          </div>
        </div>
      </div>}
      {craftsman &&
      <div className="d-flex justify-content-center">
        <div className="card col-sm-8 col-md-6 col-lg-4" >
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center"><strong>{craftsman[0].name}</strong></h5>
            <h6 class="card-subtitle mb-2 text-muted">Spécialité: <strong>{craftsman[0].specialty}</strong></h6>
            <h6 class="card-subtitle mb-2 text-muted">Note: <strong>{craftsman[0].note}</strong></h6>
            <h6 class="card-subtitle mb-2 text-muted">Localisation: <strong>{craftsman[0].location}</strong></h6>
          </div>
        </div>
      </div>
      }

      
      <h3>3. Contactez Votre Artisan</h3>
      {craftsman && 
      <div className="d-flex flex-column align-items-center py-5">
        <h4 className="px-0 mx-0">Entrez en contact avec votre artisan <strong>{craftsman[0].name}</strong></h4>
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
              <textarea classNam="form-control w-100" placeholder="Message"  rows="3" ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary">Envoyer</button>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" onClick={clearchoices} className="btn btn-primary">Refaire votre choix</button>
            </div>
          </div>
        </div>
        
      </div>}
      <h3>4. Une réponse sera apportée sous 48h.</h3>
      <hr />

      <h2>4. Nos trois champions du mois</h2>
      <div id="home-classement-container" className="d-flex flex-sm-column align-items-sm-center flex-md-row justify-content-md-evenly flex-md-wrap flex-lg-row justify-content-lg-evenly">
        {classement.slice(0, 3).map((item, index) => (
        <div className="card col-sm-8 col-md-5 col-lg-3 mt-2" key={index}>
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center"><strong>{item.name}</strong></h5>
            <h6 class="card-subtitle mb-2 text-muted">Spécialité: <strong>{item.specialty}</strong></h6>
            <h6 class="card-subtitle mb-2 text-muted">Note: <strong>{item.note}</strong></h6>
            <h6 class="card-subtitle mb-2 text-muted">Localisation: <strong>{item.location}</strong></h6>
          </div>
        </div>
          ))}
      </div>
    </div>
  )
}


