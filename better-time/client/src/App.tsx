//Import Packages
import React from 'react';
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
import ClosedNavBar from './components/DrawerNavBar/ClosedNavBar';


function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <div className='drawerContent'>
        <DrawerNavBar></DrawerNavBar>
        {/* <ClosedNavBar></ClosedNavBar> */}

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
