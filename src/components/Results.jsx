import Card from '../components/Card';
import datas from '../datas.json'; 

export default function Results({searchText}) {
// Trie les données par la "note"
  const sortedList = datas.sort((a, b) => b.note - a.note); // Tri décroissant
  const results = sortedList.filter(profile =>
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