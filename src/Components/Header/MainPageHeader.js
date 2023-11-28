import React from "react";
import styles from "./MainPageHeader.module.css";
import ava from "../../img/ava.jpg";

const MainPageHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.qwe}>
        <img className={styles.ava} src={ava} />
        </div>
        <h2 className={styles.pageTitle}>Chats</h2>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="calc((26 / 390) * 100vmin)"
          height="calc((28 / 390) * 100vmin)"
          viewBox="0 0 26 28"
          fill="none"
        >
          <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="3" />
          <line
            x1="14.1213"
            y1="15"
            x2="24.0208"
            y2="24.8995"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainPageHeader;
