//Import styles
import styles from "./Card.module.css";

function Card({
  title,
  description,
  days,
  hours,
  minutes,
  seconds,
  imgUrl,
}: any) {
  return (
    <div className={styles.cardsCtn}>
      <div className={styles.card}>
        <div className={styles.titleCtn}>
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className={styles.timerDataCtn}>
          <p>{days}</p>
          <p>{hours}</p>
          <p>{minutes}</p>
          <p>{seconds}</p>
          <p>{imgUrl}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
