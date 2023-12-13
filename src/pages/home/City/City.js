import React, { useState } from "react";
import styles from "./City.module.css";

const DUMMY_CITY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = (props) => {
  const [cities, setCities] = useState(DUMMY_CITY);

  return (
    <div className={styles["city-controls"]}>
      <ul>
        {cities.map((city) => {
          return (
            <li key={city.image}>
              <div className={styles["city-control"]}>
                <div className={styles["city-control__item"]}>
                  <div className={styles["city-control__item-image"]}>
                    <img src={city.image}></img>
                  </div>
                  <div className={styles["city-control__item-content"]}>
                    <h2>{city.name}</h2>
                    <p>{city.subText}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default City;
