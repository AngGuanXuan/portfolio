import React from "react";
import styles from "./styles.module.scss";

const Scrolldown = () => {
  return (
    <div className={styles.container_mouse}>
      <span className={styles.mouse_btn}>
        <span className={styles.mouse_scroll}></span>
      </span>
      <span>Scroll Down</span>
    </div>
  );
};

export default Scrolldown;
