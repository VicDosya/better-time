//Import styles and icons
import styles from "./LiveCard.module.css";
import Avatar from "@mui/material/Avatar";

function LiveCard() {
  return (
    <div className={styles.card}>
      <div className={styles.titleCtn}>
        <p>Go to sleep in:</p>
        <div className={styles.avatarCtn}>
          <Avatar sx={{ width: 35, height: 35 }} alt="Profile Icon" src="" />
        </div>
      </div>
      <div className={styles.remainingTimeCtn}>
        <p>15 days and 3 hours...</p>
      </div>
    </div>
  );
}

export default LiveCard;
