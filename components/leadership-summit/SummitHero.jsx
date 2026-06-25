import Image from "next/image";
import styles from "../../styles/LeadershipSummitRegister.module.css";

export default function SummitHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          src="/images/leadership-summit/bni-logo.png"
          alt="Business Needs Inc."
          width={180}
          height={60}
          className={styles.heroLogo}
          priority
        />

        <h1>
          2026 Business Needs
          <br />
          Inc. Leadership Summit
        </h1>

        <h3>July 25, 2026 • New Delhi</h3>

        <p>
          A place for leaders, working professionals, students, and anyone
          looking to build on their leadership skills, adopt fresh perspectives,
          and join a community of dedicated individuals.
        </p>

        <a href="#registration" className={styles.heroButton}>
          REGISTER NOW!
        </a>
      </div>
    </section>
  );
}