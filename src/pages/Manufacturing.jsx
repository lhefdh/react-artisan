import BreadCrumb from '../components/BreadCrumb';
import Card from '../components/Card';

export default function Manufacturing({sortedData}) {

  const FilteredProfiles = sortedData.filter(profile =>
   profile.category === 'Fabrication');
  return (
    <>
    <div id="manufacturing-container">
      <BreadCrumb/>
      <h2>Trouvez votre artisan dans la catégorie de "Fabrication"</h2>
      <div className="list-container d-flex flex-row justify-content-evenly flex-wrap">
        {FilteredProfiles.map((item,id)=>(
          <Card item={item} key={id}/>
        ))}
      </div>
    </div>
      
    </>
  )
}