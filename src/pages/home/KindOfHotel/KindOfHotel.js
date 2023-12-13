import React, { useState } from "react";
import styles from "./KindOfHotel.module.css";

const DUMMY_TYPECITY = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const KindOfHotel = (props) => {
  const [typeCities, setTypeCities] = useState(DUMMY_TYPECITY);

  return (
    <div>
      <div className={styles["typeCity-controls"]}>
        <h1>Browse by Propety Type</h1>
        <ul>
          {typeCities.map((typeCity) => {
            return (
              <li key={typeCity.image}>
                <div className={styles["typeCity-control__item"]}>
                  <div className={styles["typeCity-control__item-image"]}>
                    <img src={typeCity.image}></img>
                  </div>
                  <div className={styles["typeCity-control__item-content"]}>
                    <h2>{typeCity.name}</h2>
                    <p>{typeCity.count} hotels</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default KindOfHotel;
