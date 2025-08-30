import BreadCrumb from '../components/BreadCrumb'; 
import Card from '../components/Card';

export default function Services({sortedData}) {

  const FilteredProfiles = sortedData.filter(profile =>
  profile.category === 'Services');
  console.log(FilteredProfiles)

 return (
    <>
    <div id="services-container">
      <BreadCrumb/>
      <h2>Trouvez votre artisan dans la catégorie de "Services"</h2>
      <div className="list-container d-flex flex-row justify-content-evenly flex-wrap">
        {FilteredProfiles.map((item)=>(
          <Card item={item} id={item.id} key={item.id}/>
        ))}
      </div>
    </div>
    </>
  )
}