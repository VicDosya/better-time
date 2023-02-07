//Import packages
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

//Import Components
import SequenceCardList from "../SequenceCard/SequenceCardList";
import LiveCardList from "../LiveCard/LiveCardList";
import AddTimer from "../AddTimer/AddTimer";

//Import queries
import { GET_ALL_SEQUENCE_TIMERS } from "./MyTimersQueries";

//Import styles and icons
import styles from "./MyTimers.module.css";

function MyTimers() {
  //useState Variables
  const [sequenceTimers, setSequenceTimers] = useState([]);

  //useQuery to get all sequence timers + loading and error conditions
  const { loading, error, data } = useQuery(GET_ALL_SEQUENCE_TIMERS);

  useEffect(() => {
    if (!loading && !error) {
      setSequenceTimers(data.sequenceTimers);
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
          <p>My sequences</p>
          <SequenceCardList sequenceTimers={sequenceTimers}></SequenceCardList>
        </div>

        <div className={styles.liveTimersCtn}>
          <p>My Live Timers</p>
          <LiveCardList></LiveCardList>
        </div>
        <AddTimer></AddTimer>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  );
}

export default MyTimers;
