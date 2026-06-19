import Image from "next/image";
import styles from "../../styles/LeadershipSummitRegister.module.css";
import { scheduleItems } from "./summitData";

export default function SummitSchedule() {
  return (
    <section className={styles.scheduleSection}>
      <div className={styles.scheduleHeader}>
        <h2>THE SCHEDULE</h2>

        <Image
          src="/images/leadership-summit/bni-logo.png"
          alt="Business Needs Inc."
          width={160}
          height={55}
          className={styles.scheduleLogo}
        />
      </div>

      <div className={styles.timeline}>
        {scheduleItems.map((item, index) => (
          <div className={styles.timelineItem} key={index}>
            <h4>{item.time}</h4>

            <span
              className={`${styles.timelineDot} ${
                item.color === "gold" ? styles.goldDot : styles.blueDot
              }`}
            ></span>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.detailsBox}>
        <span>DETAILS</span>
        <p>
          The session will be followed by an interactive Q&A, giving attendees the opportunity to engage with the speakers, share their thoughts, and gain deeper insights from the discussion..
        </p>
      </div>
    </section>
  );
}