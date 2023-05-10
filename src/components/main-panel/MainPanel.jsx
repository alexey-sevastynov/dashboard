import React from "react";
import styles from "./mainPanel.module.css";
import ListItem from "../list-item/ListItem";
import { allCustomers } from "../../assets/listCustomers";
import Tabulation from "../tabulation/Tabulation";

const keys = ["name", "company", "phone", "email", "country", "status"];

function MainPanel({ query, setQuery }) {
  const onChangeSearch = (event) => {
    setQuery(event.target.value);
  };

  const search = (data) => {
    return data.filter((item) =>
      // item.name.toLowerCase().includes(query) ||
      // item.company.toLowerCase().includes(query) ||
      // item.phone.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query) ||
      // item.country.toLowerCase().includes(query) ||
      // !item.status.toLowerCase().indexOf(query)
      keys.some((key) =>
        key === "status"
          ? !item[key].toLowerCase().indexOf(query)
          : item[key].toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className={styles.root}>
      <h2>Hello Evano👋🏼,</h2>

      <div className={styles.wrapper}>
        <header>
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => onChangeSearch(e)}
              value={query}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 19L14.65 14.65"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </header>

        <div className={styles.table}>
          <ul className={styles.tableTop}>
            <li className={styles.col_1}>Customer Name</li>
            <li className={styles.col_2}>Company</li>
            <li className={styles.col_3}>Phone Number</li>
            <li className={styles.col_4}>Email</li>
            <li className={styles.col_5}>Country</li>
            <li className={styles.col_6}>Status</li>
          </ul>

          {search(allCustomers).map((customer) => (
            <ListItem key={customer.id} {...customer} />
          ))}
        </div>
        <div className={styles.borderTableTop}></div>

        <div className={styles.tableBottom}>
          <p>Showing data 1 to 8 of 256K entries</p>
          <Tabulation />
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
