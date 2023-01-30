import React, {useState} from 'react'

import styles from './DrawerNavBar.module.css';

function DrawerNavBar() {

  return (
    <div className={styles.drawerCtn}>
      <div><p>Home</p></div>
      <div><p>Favorites</p></div>
      <div><p>My Timers</p></div>
      <div><p>Social</p></div>
    </div>
  )
}

export default DrawerNavBar