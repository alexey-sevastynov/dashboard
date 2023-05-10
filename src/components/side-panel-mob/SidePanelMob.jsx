import React from "react";
import { btnsNavMenu } from "../../assets/btnNavMenu";
import styles from "./sidePanelMob.module.css";
import ButtonMenu from "../button-menu/ButtonMenu";
import UserName from "../user-name/UserName";

function SidePanelMob() {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <svg
          width="31"
          height="33"
          viewBox="0 0 31 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5003 32.8876C14.4674 32.8876 13.419 32.6564 12.602 32.1784L4.12284 27.2914C0.669508 24.9634 0.453674 24.6089 0.453674 20.9551V12.0443C0.453674 8.39053 0.654091 8.03595 4.04576 5.73887L12.5865 0.805532C14.2053 -0.134884 16.749 -0.134884 18.3678 0.805532L26.8778 5.70803C30.3311 8.03595 30.547 8.39053 30.547 12.0443V20.9397C30.547 24.5934 30.3465 24.948 26.9549 27.2451L18.414 32.1784C17.5815 32.6564 16.5332 32.8876 15.5003 32.8876ZM15.5003 2.42428C14.8528 2.42428 14.2207 2.54762 13.7736 2.8097L5.29451 7.7122C2.78159 9.40803 2.78159 9.40803 2.78159 12.0443V20.9397C2.78159 23.5759 2.78159 23.5759 5.35617 25.318L13.7736 30.1743C14.6832 30.6984 16.3328 30.6984 17.2424 30.1743L25.7215 25.2718C28.219 23.5759 28.219 23.5759 28.219 20.9397V12.0443C28.219 9.40803 28.219 9.40803 25.6445 7.66595L17.227 2.8097C16.7799 2.54762 16.1478 2.42428 15.5003 2.42428Z"
            fill="black"
          />
          <path
            d="M15.5 22.2812C12.3088 22.2812 9.71875 19.6912 9.71875 16.5C9.71875 13.3088 12.3088 10.7188 15.5 10.7188C18.6912 10.7188 21.2812 13.3088 21.2812 16.5C21.2812 19.6912 18.6912 22.2812 15.5 22.2812ZM15.5 13.0312C13.5883 13.0312 12.0312 14.5883 12.0312 16.5C12.0312 18.4117 13.5883 19.9688 15.5 19.9688C17.4117 19.9688 18.9688 18.4117 18.9688 16.5C18.9688 14.5883 17.4117 13.0312 15.5 13.0312Z"
            fill="black"
          />
        </svg>
        <div className={styles.header}>
          <h1>Dashboard</h1>
          <span>v.01</span>
        </div>
        <div className={styles.userName}>
          <UserName />
        </div>
      </div>

      <div className={styles.menu}>
        {btnsNavMenu.map((btn) => (
          <ButtonMenu key={btn.id} {...btn} />
        ))}
      </div>
    </div>
  );
}

export default SidePanelMob;
