import React from 'react'
import styles from './SequenceTimerPage.module.css';
import Card from './Card';
import AddCard from './AddCard';

function SequenceTimerPage() {
    return (
        <div className={styles.pageCtn}>
            <div className={styles.sideSpaceCtn}></div>
            <div className={styles.timersCtn}>
                <div className={styles.sequencesCtn}>
                    <p>sequenceTimer TITLE goes here</p>
                    <p>sequenceTimer DESCRIPTION goes here</p>
                </div>
                <div className={styles.cardsCtn}>
                    <Card></Card>
                    <AddCard></AddCard>
                </div>
            </div>
        </div>
    )
}

export default SequenceTimerPage