import React from "react";
import styles from "./userName.module.css";

import foto from "../../assets/image/avatar.png";

function UserName() {
  return (
    <div className={styles.root}>
      <img src={foto} alt="face" width={42} height={42} />
      <div className={styles.subTitle}>
        <p>Evano</p>
        <span>Project Manager</span>
      </div>
    </div>
  );
}

export default UserName;
