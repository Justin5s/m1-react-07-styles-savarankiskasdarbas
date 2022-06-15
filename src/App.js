import React, { useState, useEffect } from 'react';
import { getPetsData } from './API/api.js';
import './App.css';
// import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Header from './components/header/Header';

// import MyButton from './components/MyButton/MyButton';


function App() {
  useEffect(() => {
   async function dataList() { return await getPetsData() }
    console.log('dataList ===', dataList());
  }, [] )
  return (
    <div className='App'>
      <Header />
      <CardList data={[]} />
      {/* <footer>
        <p>Copyright &copy; VetBee 2022 all rights reserved</p>
      </footer> */}
    </div>
  );
}

export default App;
