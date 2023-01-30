//Import Packages
import React from 'react';

//Import Components
import TopBar from './components/TopBar/TopBar';
import DrawerNavBar from './components/DrawerNavBar/DrawerNavBar';

//Import styles
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <DrawerNavBar></DrawerNavBar>
    </div>
  );
}

export default App;
