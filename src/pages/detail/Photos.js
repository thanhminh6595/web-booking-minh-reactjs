import React, { useState } from "react";
import styles from "./Photos.module.css";

const Photos = (props) => {
  return (
    <div className={styles.photos}>
      {props.detail.map((photo) => {
        return (
          <div key={photo}>
            <img src={photo} />
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
