import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header.js";
import City from "./City/City";
import KindOfHotel from "./KindOfHotel/KindOfHotel";
import DetailHotels from "./HotelDetails/DetailHotels";
import HomeForm from "./HomeForm/HomeForm";
import Footer from "./Footer/Footer";

const Home = (props) => {
  const linkSearchHandler = (event) => {
    return event;
  };

  return (
    <div>
      <Navbar />
      <Header onLinkSearch={linkSearchHandler} />
      <City />
      <KindOfHotel />
      <DetailHotels />
      <HomeForm />
      <Footer />
    </div>
  );
};

export default Home;
