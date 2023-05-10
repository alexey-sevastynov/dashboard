import React from "react";
import styles from "./mainPanelMob.module.css";
import { allCustomers } from "../../assets/listCustomers";
import Tabulation from "../tabulation/Tabulation";
import UserName from "../user-name/UserName";
import ListItemMob from "../list-item-mob/ListItemMob";

const keys = ["name", "company", "phone", "email", "country", "status"];

function MainPanelMob({ query, setQuery }) {
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
          {search(allCustomers).map((customer) => (
            <ListItemMob key={customer.id} {...customer} />
          ))}
        </div>

        <div className={styles.tableBottom}>
          <Tabulation />
        </div>
      </div>
    </div>
  );
}

export default MainPanelMob;
