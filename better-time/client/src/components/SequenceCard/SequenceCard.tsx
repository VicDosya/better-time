import React from 'react'
import styles from './SequenceCard.module.css'
import Avatar from "@mui/material/Avatar";

function SequenceCard() {
    return (
        <div className={styles.cardsCtn}>
            <div className={styles.card}>
                <div className={styles.titleCtn}>
                    <p>CARD SEQUENCE TITLE</p>
                    <div className={styles.avatarCtn}>
                        <Avatar sx={{ width: 35, height: 35 }} alt="Profile Icon" src="" />
                    </div>
                </div>
                <div className={styles.dscCtn}>
                    <p>A short description...</p>
                </div>
                <div className={styles.timerDataCtn}>
                    <p>5 Timers</p>
                    <p>40min</p>
                </div>
                <div className={styles.likesFavsCtn}>
                    <p>23 Likes</p>
                    <p>40 Favorites</p>
                </div>
            </div>
        </div>
    )
}

export default SequenceCard