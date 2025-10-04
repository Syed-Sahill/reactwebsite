import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import  image1  from "./images/image-1.webp";

const Home = () => {
  return (
    <>
      <Common  
        name="Grow your business with"
        imgSrc={image1}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
