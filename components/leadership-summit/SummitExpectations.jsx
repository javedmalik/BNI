import Image from "next/image";
import styles from "../../styles/LeadershipSummitRegister.module.css";
import { expectationItems } from "./summitData";
import SummitRegisterForm from "./SummitRegisterForm";

export default function SummitExpectations() {
  return (
    <section className={styles.expectSection}>
      <div className={styles.expectInner}>
        <h2>What to Expect at the Leadership Summit:</h2>

        <div className={styles.expectGrid}>
          {expectationItems.map((item, index) => (
            <div className={styles.expectCard} key={index}>
              <div className={styles.expectImageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={200}
                  className={styles.expectImage}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div id="registration" className={styles.registrationArea}>
          <div className={styles.registrationTitle}>
            Register Now
            <br />
            to Secure your
            <br />
            Spot
          </div>

          <SummitRegisterForm />
        </div>
      </div>
    </section>
  );
}