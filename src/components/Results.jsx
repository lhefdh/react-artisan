import Card from '../components/Card';

export default function Results({sortedData, searchText}) {

const results = sortedData.filter(profile =>
    profile.name.toLowerCase().includes(searchText)
    || profile.location.toLowerCase().includes(searchText)
    || profile.specialty.toLowerCase().includes(searchText));

  return (
    <>
    {(searchText!='') &&
    <div>
      <h2>Vos résultats de recherche</h2>
      <div className="list-container d-flex flex-row justify-content-evenly flex-wrap">
        {results.map((item)=>(
          <Card item={item} id={item.id} key={item.id}/>
        ))}
      </div>
    </div>}
      
    </>
  )
}