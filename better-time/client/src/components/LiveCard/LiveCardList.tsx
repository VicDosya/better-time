import React from 'react'
import styles from './LiveCardList.module.css';
import LiveCard from './LiveCard';
function LiveCardList() {
    return (
        <div className={styles.cardsCtn}>
            <LiveCard></LiveCard>
            <LiveCard></LiveCard>
            <LiveCard></LiveCard>
            <LiveCard></LiveCard>
        </div>
    )
}

export default LiveCardList