import React from "react";
import styles from "../main-panel/mainPanel.module.css";

function ListItem({ name, company, phone, email, country, status }) {
  const isActiveBtn =
    status === "active" ? (
      <button className={`${styles.btn} ${styles.active}`}>Active</button>
    ) : (
      <button className={`${styles.btn}`}>Inactive</button>
    );

  return (
    <ul className={styles.tableMain}>
      <li className={styles.col_1}>{name}</li>
      <li className={styles.col_2}>{company}</li>
      <li className={styles.col_3}>{phone}</li>
      <li className={styles.col_4}>{email}</li>
      <li className={styles.col_5}>{country}</li>
      <li className={styles.col_6}>{isActiveBtn}</li>
    </ul>
  );
}

export default ListItem;
