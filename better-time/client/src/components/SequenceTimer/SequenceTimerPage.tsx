//Import packages
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

//Import components
import AddCard from "./AddCard";
import CardList from "./CardList";

//Import queries
import { GET_ALL_SEQUENCE_CARDS } from "./SequenceTimerQueries";

//Import styles
import styles from "./SequenceTimerPage.module.css";

function SequenceTimerPage() {
  //useState variables
  const [sequenceCards, setSequenceCards] = useState([]);

  //useQuery to get all sequence cards + loading and error conditions
  const { loading, error, data } = useQuery(GET_ALL_SEQUENCE_CARDS);

  useEffect(() => {
    if (!loading && !error) {
      setSequenceCards(data.getAllSequenceCards);
    }
  }, [loading, error, data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles.pageCtn}>
      <div className={styles.sideSpaceCtn}></div>
      <div className={styles.timersCtn}>
        <div className={styles.sequencesCtn}>
          <p>sequence timer title from its creation id</p>
          <p>sequence timer description from its creation id</p>
        </div>
        <div className={styles.cardsCtn}>
          <CardList sequenceCards={sequenceCards}></CardList>
          <AddCard></AddCard>
        </div>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  );
}

export default SequenceTimerPage;
