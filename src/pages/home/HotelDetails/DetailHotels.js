import React, { useState } from "react";
import styles from "./DetailHotels.module.css";

const DUMMY_HOTEL = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const DetailHotels = (props) => {
  const [hotels, setHotels] = useState(DUMMY_HOTEL);

  const clickDetailHandler = (event) => {
    event.preventDefault();
    window.location.replace("/detail");
  };

  return (
    <div>
      <div className={styles["hotel-controls"]}>
        <h1>Homes guests love</h1>
        <ul className={styles["hotel-control"]}>
          {hotels.map((hotel) => {
            return (
              <li key={hotel.image_url}>
                <div className={styles["hotel-control__item"]}>
                  <div className={styles["hotel-control__item-image"]}>
                    <img src={hotel.image_url}></img>
                  </div>
                  <div className={styles["hotel-control__item-content"]}>
                    <div className={styles.link}>
                      <a href="#" onClick={clickDetailHandler}>
                        {hotel.name}
                      </a>
                    </div>
                    <div className={styles["hotel-item__city"]}>
                      <p>{hotel.city}</p>
                    </div>
                    <div className={styles["hotel-item__price"]}>
                      <p>Starting from ${hotel.price}</p>
                    </div>
                    <div>
                      <span>{hotel.rate}</span> {hotel.type}
                    </div>
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

export default DetailHotels;
