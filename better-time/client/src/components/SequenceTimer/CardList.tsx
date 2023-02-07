//Import Components
import Card from "./Card";

//Import styles
import styles from "./CardList.module.css";

function CardList({ sequenceCard }: any) {
  return (
    <div className={styles.cardCtn}>
      {sequenceCard.map((sequenceCard: any, key: any) => {
        return (
          <Card
            title={sequenceCard.title}
            description={sequenceCard.description}
            days={sequenceCard.days}
            hours={sequenceCard.hours}
            minutes={sequenceCard.minutes}
            seconds={sequenceCard.seconds}
            imgUrl={sequenceCard.imgUrl}
            key={key}
          ></Card>
        );
      })}
    </div>
  );
}

export default CardList;
