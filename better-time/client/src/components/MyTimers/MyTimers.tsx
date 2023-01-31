//Import packages
import React from 'react'

//Import Components
import SequenceCardList from '../SequenceCard/SequenceCardList';
import LiveCardList from '../LiveCard/LiveCardList';

//Import styles and icons
import styles from './MyTimers.module.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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
                <div className={styles.addBtnCtn}>
                <span><Fab color="primary"><AddIcon /></Fab></span>
                </div>
            </div>
            <div className={styles.sideSpaceCtn}></div>
        </div>
    )
}

export default MyTimers