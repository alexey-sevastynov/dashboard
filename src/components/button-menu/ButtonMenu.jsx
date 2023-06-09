import React from "react";

import styles from "./buttonMenu.module.css";

function ButtonMenu({ icon, title, subTitle, active }) {
  const isActiveArrow = active ? (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        stroke="#9197B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={`${styles.root} ${active ? styles.active : ""}`}>
      {icon}

      <p>{title}</p>

      {subTitle && isActiveArrow}
    </div>
  );
}

export default ButtonMenu;
