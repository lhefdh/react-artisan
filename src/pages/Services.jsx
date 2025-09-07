import BreadCrumb from '../components/BreadCrumb'; 
import Results from '../components/Results';
import Card from '../components/Card';

export default function Services({sortedData, searchText}) {

const FilteredProfiles = sortedData.filter(profile =>
profile.category === 'Services');

  return (

    <main id="services-container">
      <BreadCrumb/>
      {/* affichege des résultats de la recherche */}
      <Results searchText={searchText} sortedData={sortedData}/>
      <h2>Trouvez votre artisan dans la catégorie de "Services"</h2>
      <article className="list-container d-flex flex-row justify-content-evenly flex-wrap">
        {FilteredProfiles.map((item)=>(
          <Card item={item} id={item.id} key={item.id}/>
        ))}
      </article>
    </main>

  )
}