import styles from "../../styles/LeadershipSummitRegister.module.css";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir//Shangri-La+Eros+New+Delhi,+19,+Ashoka+Rd,+Janpath,+Connaught+Place,+New+Delhi,+Delhi+110001/@28.6318129,77.4111566,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce2ca85e71fd1:0xa3186e3af651dd0c!2m2!1d77.218168!2d28.6209501?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D";

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
            <strong>12:00 PM</strong>
          </div>

          <div>
            <span>📅</span>
            <strong>July 25, 2026</strong>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.locationLink}
          >
            <span>📍</span>
            <strong>  Shangri-La Eros, New Delhi</strong>
          </a>
        </div>
      </div>
    </section>
  );
}