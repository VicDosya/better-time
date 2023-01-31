import React from 'react'
import styles from './Favorites.module.css';

function Favorites() {
  return (
    <div className={styles.favoritesCtn}>
      <div className={styles.sideSpaceCtn}></div>
      <div className={styles.contentCtn}>
        <h1>Favorites</h1>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  )
}

export default Favorites