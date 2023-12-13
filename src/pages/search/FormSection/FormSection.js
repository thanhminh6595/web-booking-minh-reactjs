import React, { useState } from "react";
import styles from "./FormSection.module.css";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";

const FormSection = (props) => {
  return (
    <div className={styles["section-controls"]}>
      <div>
        <SearchPopup />
      </div>
      <div>
        <SearchList />
      </div>
    </div>
  );
};

export default FormSection;
