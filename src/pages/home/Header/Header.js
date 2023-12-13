import React, { useState } from "react";
import styles from "./Header.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const Header = (props) => {
  const [valueInput, setValueInput] = useState("");
  const [isClicked, setIsClicked] = useState(true);
  const [flag, setFlag] = useState(true);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const clickDateHandler = (event) => {
    if (flag) {
      setIsClicked(() => {
        return false;
      });
      setFlag(() => {
        return false;
      });
    } else {
      setIsClicked(() => {
        return true;
      });
      setFlag(() => {
        return true;
      });
    }
  };

  const clickSearchHandler = () => {
    window.location.replace("/search");
  };

  const changePickHandler = (event) => {
    setSelectionRange((preState) => {
      preState.startDate = event.selection.startDate;
      preState.endDate = event.selection.endDate;
      return preState;
    });

    setValueInput(() => {
      return `${selectionRange.startDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })} to ${selectionRange.endDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })}`;
    });
  };

  const keyDownHandler = (event) => {
    console.log(event);
    if (event.key === "Escape") {
      setIsClicked(() => {
        return true;
      });
      setFlag(() => {
        return true;
      });
    }
  };

  return (
    <div className={styles["header-controls"]} onKeyDown={keyDownHandler}>
      <div>
        <h1>A lifetime of discounts? It's Genius</h1>
        <p>
          {" "}
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button
          type="button"
          className={`${styles["button__register-login"]} ${styles.button}`}
        >
          Sign in/ Register
        </button>

        <form type="submit" className={styles["header-control"]}>
          <div className={styles["header-control__item"]}>
            <i className={`fa-solid fa-bed`} />
            <input placeholder="Where are you going?"></input>
          </div>

          <div className={`${styles["header-control__item"]}`}>
            <i className={`fa-solid fa-calendar`} onClick={clickDateHandler} />
            <input
              value={valueInput}
              type="text"
              className={styles["header-control__date"]}
              placeholder={`${selectionRange.startDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })} to ${selectionRange.endDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}`}
              onClick={clickDateHandler}
            ></input>
          </div>

          <div className={`${styles["header-control__item"]}`}>
            <i className={`fa-solid fa-female`} />
            <input placeholder="1 adult • 0 children • 1 room"></input>
          </div>

          <div>
            <button
              type="button"
              className={styles.button}
              onClick={clickSearchHandler}
            >
              Search
            </button>
          </div>
        </form>
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          className={`${isClicked && styles["hidden"]} ${styles["date"]}`}
          minDate={new Date()}
          onChange={changePickHandler}
          ranges={[selectionRange]}
        />
      </div>
    </div>
  );
};

export default Header;
