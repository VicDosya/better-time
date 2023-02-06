//Import styles and icons
import styles from "./SequenceCard.module.css";
import Avatar from "@mui/material/Avatar";

function SequenceCard({ title, description, imgUrl }: any) {
  return (
    <div className={styles.cardsCtn}>
      <div className={styles.card}>
        <div className={styles.titleCtn}>
          <p>{title}</p>
          <div className={styles.avatarCtn}>
            <Avatar sx={{ width: 35, height: 35 }} alt="Profile Icon" src="" />
          </div>
        </div>
        <div className={styles.dscCtn}>
          <p>{description}</p>
        </div>
        <div className={styles.timerDataCtn}>
          <p>5 Timers</p>
          <p>40min</p>
        </div>
        <div className={styles.likesFavsCtn}>
          <p>23 Likes</p>
          <p>40 Favorites</p>
        </div>
      </div>
    </div>
  );
}

export default SequenceCard;
