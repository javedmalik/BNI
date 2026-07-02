import Image from "next/image";
import styles from "../../styles/LeadershipSummitRegister.module.css";
import { speakers } from "./summitData";

export default function SummitSpeakers() {
  return (
    <section className={styles.speakersSection}>
      {/* <div className={styles.speakersTopLogo}>
        <Image
          src="/images/leadership-summit/bni-logo.png"
          alt="Business Needs Inc."
          width={120}
          height={40}
          className={styles.bniSmallLogo}
        />
      </div> */}

      <h2>Meet our Panel of Speakers:</h2>

      <div className={styles.speakersList}>
        {speakers.map((speaker, index) => (
          <div className={styles.speakerRow} key={index}>
            <div className={styles.speakerImageWrap}>
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={190}
                  height={190}
                  className={styles.speakerImage}
                />
              ) : (
                <Image
                  src="/images/leadership-summit/speaker-placeholder.png"
                  alt="Speaker placeholder"
                  width={190}
                  height={190}
                  className={styles.speakerImage}
                />
              )}
            </div>

            <div className={styles.speakerInfo}>
              <h3>{speaker.name}</h3>
              <p className={styles.designation}>{speaker.designation}</p>
              {/* <h4>{speaker.topic}</h4> */}
              <p>{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}