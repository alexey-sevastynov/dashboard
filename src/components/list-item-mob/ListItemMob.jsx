import React from "react";
import styles from "../main-panel/mainPanel.module.css";

function ListItemMob({ name, company, phone, email, country, status }) {
  const isActiveBtn =
    status === "active" ? (
      <button className={`${styles.btn} ${styles.active}`}>Active</button>
    ) : (
      <button className={`${styles.btn}`}>Inactive</button>
    );

  return (
    <ul>
      <li>
        <p>Customer Name:</p>
        <span>{name}</span>
      </li>
      <li>
        <p>Company:</p>
        <span>{company}</span>
      </li>
      <li>
        <p>Phone Number:</p>
        <span>{phone}</span>
      </li>
      <li>
        <p>Email:</p>
        <span>{email}</span>
      </li>
      <li>
        <p>Country:</p>
        <span>{country}</span>
      </li>
      <li>
        <p>Status:</p>
        <span>{isActiveBtn}</span>
      </li>
    </ul>
  );
}

export default ListItemMob;
