import  { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import datas from './datas.json';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Building from './pages/Building.jsx'
import Services from './pages/Services.jsx'
import Manufacturing from './pages/Manufacturing.jsx'
import Footer from './components/Footer.jsx'
import Craftsman from './pages/Craftsman.jsx'

import './App.css'

export default function App() {

  const [craftsman, setCraftsman] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {


    // Trie les données par la clé "note" (par exemple)
    const sortedList = datas.sort((a, b) => b.note - a.note); // Tri décroissant

    setSortedData(sortedList);

  }, []);



  return (
    <>
      <BrowserRouter>
        <Header searchText={searchText} onSetSearchText={setSearchText}/>
        <Routes>
          <Route path='/' element={<Home craftsman={craftsman} sortedData={sortedData} onSetCraftsman={setCraftsman} searchText={searchText}/>}></Route>
          <Route path='/batiment' element={<Building sortedData={sortedData}/>}/>
          <Route path='/services' element={<Services sortedData={sortedData}/>}/>
          <Route path='/fabrication' element={<Manufacturing sortedData={sortedData}/>}/>
          <Route path='/craftsman/:id' element={<Craftsman craftsman={craftsman} />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

