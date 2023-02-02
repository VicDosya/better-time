//Import Packages
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

//Import Components
import TopBar from './components/TopBar/TopBar';
import DrawerNavBar from './components/DrawerNavBar/DrawerNavBar';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Social from './components/Social/Social';

//Import styles
import './App.css';
import MyTimers from './components/MyTimers/MyTimers';

function App() {
  //useState variables
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const GET_TEST = gql`
  query Query {
    testings {
      first
      second
    }
  }
  `;
    const testData = useQuery(GET_TEST);
    console.log(testData);

  //Control the drawer with handleClick function
  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      
      <TopBar onButtonClick={handleMenuClick}></TopBar>
      <div className='drawerContent'>
        <DrawerNavBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}></DrawerNavBar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
          <Route path='/mytimers' element={<MyTimers />}></Route>
          <Route path='/social' element={<Social />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
