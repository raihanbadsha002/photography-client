import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PhotoCollections from "../../components/PhotoCollections/PhotoCollections";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <PhotoCollections />
      <Footer />
    </>
  );
};

export default Home;
