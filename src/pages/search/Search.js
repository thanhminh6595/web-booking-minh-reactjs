import React, { useState } from "react";
import styles from "./Search.module.css";
import NavBar from "../home/Navbar/Navbar";
import Footer from "../home/Footer/Footer";
import FormSection from "./FormSection/FormSection";

const Search = (props) => {
  return (
    <div className={styles.search}>
      <NavBar />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Search;
