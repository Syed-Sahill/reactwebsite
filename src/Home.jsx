import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import  hero from "./images/hero-logo.webp"

const Home = () => {
  return (
    <>
      <Common  
        name="Grow your business with"
        imgSrc={hero}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
