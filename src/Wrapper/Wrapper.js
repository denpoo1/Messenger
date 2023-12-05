import React from "react";
import styles from "./Wrapper.module.css";

const DownWrapper = (props) => {
  return (
    <div className={`${styles.bottomDiv} ${styles.divWraps}`}>
      {props.children}
    </div>
  );
};

export default DownWrapper;
