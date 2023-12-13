import React, { useState } from "react";
import styles from "./Detail.module.css";
import NavBar from "../home/Navbar/Navbar";
import Footer from "../home/Footer/Footer";
import Photos from "./Photos";

const DUMMY_DETAIL = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  const [detail, setDetail] = useState(DUMMY_DETAIL);

  return (
    <div>
      <NavBar />
      <div className={styles.detail}>
        <div className={styles["detail-header"]}>
          <div>
            <h1>{detail.name}</h1>
            <p>
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              {detail.address}
            </p>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
        <p>{detail.distance}</p>
        <p>{detail.price}</p>
        <Photos detail={detail.photos} />
        <div className={styles["detail-info"]}>
          <div className={styles["detail-info__left"]}>
            <h2>{detail.title}</h2>
            <p>
              You're eligible for a Genius discount at Aparthotel Stare Miasto!
              To save at this property, all you have to do is sign in.
              Aparthotel Stare Miasto is located in the very center of Kraków’s
              Old Town, just 394 feet from the Main Market Square. It features
              spacious modern apartments with free WiFi. Located in a historic
              building, Aparthotel Stare Miasto features a unique interior
              design in the warm color of bricks with wooden elements. All
              apartments at Aparthotel Stare Miasto are air-conditioned, fitted
              with an LCD TV and a fully-equipped kitchenette, including a
              refrigerator and an electric kettle. The 24-hour front desk offers
              ticket and tour services.
            </p>
          </div>
          <div className={styles["detail-info__right"]}>
            <h3>Perfect for a 9-night stay!</h3>
            <p>
              You're eligible for a Genius discount at Aparthotel Stare Miasto!
              To save at this property, all you have to do is sign in.
            </p>
            <h1>
              ${detail.nine_night_price}
              <span>(9 nights)</span>
            </h1>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
