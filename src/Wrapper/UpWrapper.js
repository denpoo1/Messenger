import React from "react";
import styles from "./Wrapper.module.css";

const UpWrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.upDiv} ${styles.divWraps}`}>
        {props.children}
      </div>
    </div>
  );
};

export default UpWrapper;
