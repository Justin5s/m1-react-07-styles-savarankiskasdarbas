import React, { useState, useEffect } from 'react';
import { getPetsData } from './API/api.js';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/header/Header';

function App() {
  const [petsData, setPetsData] = useState([]);
  async function petDataList() {
    const petData = await getPetsData();
    console.log('petData ===', petData);
    setPetsData(petData);
  }
  useEffect(() => {
    petDataList();
  }, []);

  function deletePet(id) {
    alert(id);
  }

  return (
    <div className='App'>
      <Header />
      <CardList data={petsData} cardDelete={deletePet}/>
      {/* <footer>
        <p>Copyright &copy; VetBee 2022 all rights reserved</p>
      </footer> */}
    </div>
  );
}

export default App;
