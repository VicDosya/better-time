//Import styles
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeCtn}>
      <div className={styles.sideSpaceCtn}></div>
      <div className={styles.contentCtn}>
        <h1>Home</h1>
      </div>
      <div className={styles.sideSpaceCtn}></div>
    </div>
  );
}

export default Home;
