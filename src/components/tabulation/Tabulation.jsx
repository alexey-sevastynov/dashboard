import React from "react";
import styles from "./tabulation.module.css";

function Tabulation() {
  return (
    <div className={styles.root}>
      <button>
        <svg
          width="5"
          height="7"
          viewBox="0 0 5 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z"
            fill="#404B52"
          />
        </svg>
      </button>
      <button className={styles.active}>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <span>...</span>
      <button>40</button>
      <button>
        <svg
          width="5"
          height="7"
          viewBox="0 0 5 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z"
            fill="#404B52"
          />
        </svg>
      </button>
    </div>
  );
}

export default Tabulation;
