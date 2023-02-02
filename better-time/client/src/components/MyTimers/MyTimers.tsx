//Import packages
import React from 'react'

//Import Components
import SequenceCardList from '../SequenceCard/SequenceCardList';
import LiveCardList from '../LiveCard/LiveCardList';
import AddTimer from '../AddTimer/AddTimer';

//Import styles and icons
import styles from './MyTimers.module.css';


function MyTimers() {
    return (
        <div className={styles.pageCtn}>
            <div className={styles.sideSpaceCtn}></div>
            <div className={styles.timersCtn}>
                <div className={styles.sequencesCtn}>
                    <p>My sequences</p>
                    <SequenceCardList></SequenceCardList>
                </div>

                <div className={styles.liveTimersCtn}>
                    <p>My Live Timers</p>
                    <LiveCardList></LiveCardList>
                </div>
                <AddTimer></AddTimer>
            </div>
            <div className={styles.sideSpaceCtn}></div>
        </div>
    )
}

export default MyTimers