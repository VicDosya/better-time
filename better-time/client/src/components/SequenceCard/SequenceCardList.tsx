//Import styles
import styles from "./SequenceCardList.module.css";

//Import components
import SequenceCard from "./SequenceCard";

function SequenceCardList({ sequenceTimers }: any) {
  return (
    <div className={styles.cardsCtn}>
      {sequenceTimers.map((sequenceTimer: any, key: any) => {
        return (
          <SequenceCard
            id={sequenceTimer.id}
            title={sequenceTimer.title}
            description={sequenceTimer.description}
            imgUrl={sequenceTimer.imgUrl}
            key={key}
          ></SequenceCard>
        );
      })}
    </div>
  );
}

export default SequenceCardList;
