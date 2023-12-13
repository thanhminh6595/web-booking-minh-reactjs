import React from "react";
import styles from "./HomeForm.module.css";

const HomeForm = (props) => {
  return (
    <div className={styles["homeForm-controls"]}>
      <div>
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <form>
          <input type="email" placeholder="Your email" required />
          <button type="button" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
