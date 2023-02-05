import React from 'react'
import styles from './Card.module.css';
import Avatar from "@mui/material/Avatar";

function Card() {
    return (
        <div className={styles.cardsCtn}>
            <div className={styles.card}>
                <div className={styles.titleCtn}>
                    <p>Sit ups</p>
                </div>
                <div className={styles.timerDataCtn}>
                    <p>5:00</p>
                </div>
            </div>
        </div>
    )
}

export default Card