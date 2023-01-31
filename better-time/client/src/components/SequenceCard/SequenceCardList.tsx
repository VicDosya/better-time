import React from 'react'
import styles from './SequenceCardList.module.css';
import SequenceCard from './SequenceCard';

function SequenceCardList() {
  return (
    <div className={styles.cardsCtn}>
      <SequenceCard></SequenceCard>
      <SequenceCard></SequenceCard>
      <SequenceCard></SequenceCard>
      <SequenceCard></SequenceCard>
    </div>

  )
}

export default SequenceCardList