import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Import styles and icons
import styles from "./DrawerNavBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimerIcon from '@mui/icons-material/Timer';
import PeopleIcon from '@mui/icons-material/People';
//Import types
import { DrawerPropsType } from './DrawerNavBar.types';

function DrawerNavBar({ isDrawerOpen, setIsDrawerOpen }: DrawerPropsType) {

  //useNavigate variable
  let navigate = useNavigate();

  return (
    <div className={isDrawerOpen ? styles.openDrawerCtn : styles.closedDrawerCtn}>
      <div className={styles.homeCtn} onClick={() => navigate("/")}>
        <HomeIcon />
        <span>{isDrawerOpen ? 'Home' : ''}</span>
      </div>
      <div className={styles.favoritesCtn} onClick={() => navigate("/favorites")}>
        <FavoriteIcon />
        <span>{isDrawerOpen ? 'Favorites' : ''}</span>
      </div>
      <div className={styles.timersCtn} onClick={() => navigate("/mytimers")}>
        <TimerIcon />
        <span>{isDrawerOpen ? 'My Timers' : ''}</span>
      </div>
      <div className={styles.socialCtn} onClick={() => navigate("/social")}>
        <PeopleIcon />
        <span>{isDrawerOpen ? 'Social' : ''}</span>
      </div>
    </div>
  );
}

export default DrawerNavBar;
