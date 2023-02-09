//Import Packages
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Import Components
import TopBar from "./components/TopBar/TopBar";
import DrawerNavBar from "./components/DrawerNavBar/DrawerNavBar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import MyTimers from "./components/MyTimers/MyTimers";
import Social from "./components/Social/Social";
import SequenceTimerPage from "./components/SequenceTimer/SequenceTimerPage";

//Import styles
import "./App.css";

function App() {
  //useState variables
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //Control the drawer with handleClick function
  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      <TopBar onButtonClick={handleMenuClick}></TopBar>
      <div className="drawerContent">
        <DrawerNavBar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        ></DrawerNavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/mytimers" element={<MyTimers />}></Route>
          <Route path="/social" element={<Social />}></Route>
          <Route path="/sequencetimer/:id" element={<SequenceTimerPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
