import React, { useState } from "react";
import styles from "./Footer.module.css";

const DUMMY_FOOTER = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const Footer = (props) => {
  const [footers, setFooters] = useState(DUMMY_FOOTER);
  return (
    <div className={styles["footer-controls"]}>
      {footers.map((footer) => {
        return (
          <div key={footer.col_number}>
            <ul>
              {footer.col_values.map((col_value) => {
                return (
                  <li key={col_value}>
                    <a href="#">{col_value}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
