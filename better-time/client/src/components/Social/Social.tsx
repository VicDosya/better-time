import React from 'react'
import styles from './Social.module.css';

function Social() {
  return (
    <div className={styles.socialCtn}>
      <div className={styles.sideSpaceCtn}></div>
      <div className={styles.contentCtn}>
        <h1>Social</h1>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  )
}

export default Social