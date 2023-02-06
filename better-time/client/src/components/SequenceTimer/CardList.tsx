//Import Components
import Card from "./Card";

//Import styles
import styles from "./CardList.module.css";

function CardList({ sequenceCards }: any) {
  return (
    <div className={styles.cardCtn}>
      {sequenceCards.map((sequenceCard: any, key: any) => {
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
