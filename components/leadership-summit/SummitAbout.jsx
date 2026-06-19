import styles from "../../styles/LeadershipSummitRegister.module.css";

export default function SummitAbout() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutOverlay}>
        <h2>Learn More About Us</h2>

        <p>
          Join us for an inspiring day of growth, learning, and innovation at
          the Business Needs’ Leadership Summit. This exciting event will bring
          together aspiring leaders, working professionals, students, and
          entrepreneurs for a full day of thought-provoking speeches,
          presentations, and interactive Q&amp;A sessions.
        </p>

        <p>
          Hear from an incredible panel of speakers as they share their
          insights, learnings, and strategies for success across all ventures of
          life — business and personal. Throughout the day, attendees will have
          the opportunity to listen to their presentations, ask questions, and
          have meaningful group discussions.
        </p>

        <p className={styles.aboutBrand}>Business Needs Inc.</p>

        <div className={styles.eventMeta}>
          <div>
            <span>🕒</span>
            <strong>10:00 AM</strong>
          </div>

          <div>
            <span>📅</span>
            <strong>July 25, 2026</strong>
          </div>

          <div>
            <span>📍</span>
            <strong>Shangri-La Eros, New Delhi</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
