import React, { useState } from "react";
import styles from "./SearchPopup.module.css";

const SearchPopup = (props) => {
  return (
    <div>
      <div className={styles["searchPopup"]}>
        <h1>Search</h1>
        <form className={styles["form-controls"]}>
          <div className={styles["form-control__destination"]}>
            <label>Destination</label>
            <input type="text" required />
          </div>
          <div className={styles["form-control__date"]}>
            <label>Check-in-Date</label>
            <input
              type="text"
              required
              placeholder="06/24/2022 to 06/24/2022"
            />
          </div>
          <div className={styles["form-control__option"]}>
            <div>Option</div>
            <div className={styles["form-control"]}>
              <label>Min price per night</label>
              <input type="text" />
            </div>
            <div className={styles["form-control"]}>
              <label>Max price per night</label>
              <input type="text" />
            </div>
            <div className={styles["form-control"]}>
              <label>Adult</label>
              <input type="text" placeholder="1" />
            </div>
            <div className={styles["form-control"]}>
              <label>Children</label>
              <input type="text" placeholder="0" />
            </div>
            <div className={styles["form-control"]}>
              <label>Room</label>
              <input type="text" placeholder="1" />
            </div>
          </div>
        </form>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchPopup;
