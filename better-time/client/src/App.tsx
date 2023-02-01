//Import Packages
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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

  //Control the drawer with handleClick function
  const handleMenuClick = () => {
    if (isDrawerOpen) {
      return setIsDrawerOpen(false);
    }
    setIsDrawerOpen(true);
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
