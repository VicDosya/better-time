//Import packages
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

//Import components
import AddCard from "./AddCard";
import CardList from "./CardList";

//Import queries
import { GET_SEQUENCE_TIMER } from "./SequenceTimerQueries";

//Import styles
import styles from "./SequenceTimerPage.module.css";

function SequenceTimerPage() {
  //useState variables
  const [sequenceTimer, setSequenceTimer] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //useParams to get the id in the URL
  const { id } = useParams();

  //useQuery to get all sequence cards + loading and error conditions
  const { loading, error, data } = useQuery(GET_SEQUENCE_TIMER, {
    variables: { sequenceTimerId: id }
  });

  useEffect(() => {
    if (!loading && !error) {
      setSequenceTimer(data.sequenceTimer.timers);
      setTitle(data.sequenceTimer.title);
      setDescription(data.sequenceTimer.description);
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
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className={styles.cardsCtn}>
          <CardList sequenceCard={sequenceTimer}></CardList>
          <AddCard sequenceTimerId={id}></AddCard>
        </div>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  );
}

export default SequenceTimerPage;
