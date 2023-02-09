//Import styles
import styles from "./LiveCardList.module.css";

//Import components
import LiveCard from "./LiveCard";

function LiveCardList() {
  return (
    <div className={styles.cardsCtn}>
      <LiveCard></LiveCard>
      <LiveCard></LiveCard>
      <LiveCard></LiveCard>
      <LiveCard></LiveCard>
    </div>
  );
}

export default LiveCardList;
