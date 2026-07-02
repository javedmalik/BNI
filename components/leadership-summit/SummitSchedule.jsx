// import Image from "next/image";
// import styles from "../../styles/LeadershipSummitRegister.module.css";
// import { scheduleItems } from "./summitData";

// export default function SummitSchedule() {
//   return (
//     <section className={styles.scheduleSection}>
//       <div className={styles.scheduleHeader}>
//         <h2>THE SCHEDULE</h2>

    
//       </div>

//       <div className={styles.timeline}>
//         {scheduleItems.map((item, index) => (
//           <div className={styles.timelineItem} key={index}>
//             <h4>{item.time}</h4>

//             <span
//               className={`${styles.timelineDot} ${
//                 item.color === "gold" ? styles.goldDot : styles.blueDot
//               }`}
//             ></span>

//             <p>{item.title}</p>
//           </div>
//         ))}
//       </div>

//       <div className={styles.detailsBox}>
//         <span>DETAILS</span>
//         <p>
//           The session will be followed by an interactive Q&A, giving attendees the opportunity to engage with the speakers, share their thoughts, and gain deeper insights from the discussion..
//         </p>
//       </div>
//     </section>
//   );
// }


// import styles from "../../styles/LeadershipSummitRegister.module.css";
// import { scheduleItems } from "./summitData";

// export default function SummitSchedule() {
//   return (
//     <section className={styles.scheduleSection}>
//       <div className={styles.scheduleHeader}>
//         <h2>THE SCHEDULE</h2>
//       </div>

//       <div className={styles.verticalSchedule}>
//         {scheduleItems.map((item, index) => (
//           <div
//             className={`${styles.scheduleRow} ${
//               item.side === "right" ? styles.scheduleRight : styles.scheduleLeft
//             }`}
//             key={index}
//           >
//             <div className={styles.scheduleLeftCol}>
//               {item.side === "left" ? (
//                 <div className={styles.scheduleTitleBox}>{item.title}</div>
//               ) : (
//                 <div className={styles.scheduleTime}>{item.time}</div>
//               )}
//             </div>

//             <div className={styles.scheduleCenter}>
//               <span className={styles.scheduleIcon}>▦</span>
//             </div>

//             <div className={styles.scheduleRightCol}>
//               {item.side === "right" ? (
//                 <div className={styles.scheduleTitleBox}>{item.title}</div>
//               ) : (
//                 <div className={styles.scheduleTime}>{item.time}</div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import styles from "../../styles/LeadershipSummitRegister.module.css";
import { scheduleItems } from "./summitData";

export default function SummitSchedule() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    updateTime();

    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  const isSessionLive = (item) => {
    if (!currentTime || !item.start || !item.end) return false;

    const startTime = new Date(item.start);
    const endTime = new Date(item.end);

    return currentTime >= startTime && currentTime <= endTime;
  };

  return (
    <section className={styles.scheduleSection}>
      <div className={styles.scheduleHeader}>
        <h2>THE SCHEDULE</h2>
      </div>

      <div className={styles.verticalSchedule}>
        {scheduleItems.map((item, index) => {
          const live = isSessionLive(item);

          return (
            <div
              className={`${styles.scheduleRow} ${
                item.side === "right"
                  ? styles.scheduleRight
                  : styles.scheduleLeft
              }`}
              key={index}
            >
              <div className={styles.scheduleLeftCol}>
                {item.side === "left" ? (
                  <div className={styles.scheduleTitleBox}>{item.title}</div>
                ) : (
                  <div className={styles.scheduleTime}>{item.time}</div>
                )}
              </div>

              <div className={styles.scheduleCenter}>
                <span
                  className={`${styles.scheduleIcon} ${
                    live ? styles.activeScheduleIcon : ""
                  }`}
                >
                  ▦
                </span>
              </div>

              <div className={styles.scheduleRightCol}>
                {item.side === "right" ? (
                  <div className={styles.scheduleTitleBox}>{item.title}</div>
                ) : (
                  <div className={styles.scheduleTime}>{item.time}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}