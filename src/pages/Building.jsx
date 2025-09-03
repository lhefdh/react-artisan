import BreadCrumb from '../components/BreadCrumb';
import Results from '../components/Results';
import Card from '../components/Card';

export default function Building({sortedData, searchText}) {

  const FilteredProfiles = sortedData.filter(profile =>
   profile.category === 'Bâtiment');

  return (

    <main id="building-container">
      <BreadCrumb/>
      {/* affichege des résultats de la recherche */}
      <Results searchText={searchText} sortedData={sortedData}/>
      <h2>Trouvez votre artisan dans la catégorie de "Bâtiment"</h2>
      <article className="list-container d-flex flex-row justify-content-evenly flex-wrap">
        {FilteredProfiles.map((item)=>(
          <Card item={item} id={item.id} key={item.id}/>
        ))}
      </article>
    </main> 

  )
}