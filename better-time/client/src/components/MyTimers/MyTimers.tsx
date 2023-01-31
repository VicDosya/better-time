import React from 'react'

import styles from './MyTimers.module.css';

function MyTimers() {
    return (
        <div className={styles.pageCtn}>
            <div className={styles.sideSpaceCtn}></div>
            <div className={styles.timersCtn}>
                <div className={styles.sequencesCtn}>
                    <p>My sequences</p>
                    <div className={styles.cardsCtn}>
                        <div className={styles.card}><p>CARD SEQUENCE</p></div>
                    </div>
                </div>

                <div className={styles.liveTimersCtn}>
                    <p>My Live Timers</p>
                    <div className={styles.cardsCtn}>
                        <div className={styles.card}><p>CARD LIVE TIMER</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.sideSpaceCtn}></div>
        </div>
    )
}

export default MyTimers