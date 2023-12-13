import React, { useState } from "react";
import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div>
      <div className={styles["searchList-controls"]}>
        <div>
          <img src={props.list.image_url} />
        </div>
        <div className={styles["searchList-control"]}>
          <div className={styles["searchList-control__content"]}>
            <h2>{props.list.name}</h2>
            <p className={styles["content-distance"]}>
              {props.list.distance} from center
            </p>
            <div className={styles["content-tag"]}>
              <span>{props.list.tag}</span>
            </div>
            <p className={styles["content-description"]}>
              {props.list.description}
            </p>
            <p className={styles["content-type"]}>{props.list.type}</p>
            {props.list.free_cancel && (
              <div className={styles["content-cancel"]}>
                <p>Free cancellation</p>
                <p>You can cancel later, so lock in this great price today!</p>
              </div>
            )}
          </div>
          <div className={styles["searchList-control__addInfo"]}>
            <div>
              <div className={styles["addInfo-top"]}>
                <p>{props.list.rate_text}</p>
                <span>{props.list.rate}</span>
              </div>
            </div>
            <div className={styles["addInfo-bottom"]}>
              <h2>${props.list.price}</h2>
              <p>Includes taxes and fees</p>
              <button>See Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
