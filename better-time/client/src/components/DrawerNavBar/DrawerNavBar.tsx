import React from "react";
import { useNavigate } from "react-router-dom";

//Import styles and icons
import styles from "./DrawerNavBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimerIcon from '@mui/icons-material/Timer';
import PeopleIcon from '@mui/icons-material/People';

function DrawerNavBar() {
  let navigate = useNavigate();

  //Navgiation functionality
  const navigateHome = (event: React.MouseEvent<HTMLDivElement>) => {
    navigate("/");
  };
  const navigateFavorites = (event: React.MouseEvent<HTMLDivElement>) => {
    navigate("/favorites");
  };
  const navigateMyTimers = (event: React.MouseEvent<HTMLDivElement>) => {
    navigate("/mytimers");
  };
  const navigateSocial = (event: React.MouseEvent<HTMLDivElement>) => {
    navigate("/social");
  };

  return (
    <div className={styles.drawerCtn}>
      <div className={styles.homeCtn} onClick={navigateHome}>
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className={styles.favoritesCtn} onClick={navigateFavorites}>
        <FavoriteIcon />
        <span>Favorites</span>
      </div>
      <div className={styles.timersCtn} onClick={navigateMyTimers}>
        <TimerIcon />
        <span>My Timers</span>
      </div>
      <div className={styles.socialCtn} onClick={navigateSocial}>
        <PeopleIcon />
        <span>Social</span>
      </div>
    </div>
  );
}

export default DrawerNavBar;
