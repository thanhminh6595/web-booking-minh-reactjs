import React, { useState } from "react";
import styles from "./Navbar.module.css";

const DUMMY_NAVBAR = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const Navbar = (props) => {
  const [navbars, setNavbars] = useState(DUMMY_NAVBAR);

  const clickHomeHandler = (event) => {
    event.preventDefault();
    // window.location.replace('/Home')
  };

  return (
    <div className={styles["navbar-controls"]}>
      <div className={styles["navbar-control"]}>
        <div className={styles["navbar-control__home"]}>
          <a href="#" onClick={clickHomeHandler}>
            Booking Website
          </a>
        </div>
        <div className={styles["navbar-control__button"]}>
          <button
            type="button"
            className={`${styles["button-register"]}  ${styles.button}`}
          >
            Register
          </button>
          <button
            type="button"
            className={`${styles["button-login"]}  ${styles.button}`}
          >
            Login
          </button>
        </div>
      </div>
      <div>
        <ul className={styles["navbar-items"]}>
          {navbars.map((navbar) => {
            return (
              <li className={styles["navbar-item"]} key={navbar.type}>
                <a href="#">
                  <i
                    className={`fa-solid ${styles["navbar-item__icon"]} ${navbar.icon}`}
                  />
                  <div className={styles["navbar-item__text"]}>
                    {navbar.type}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
