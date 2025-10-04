import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import  image2  from "./images/image-1.webp";

const About = () => {
  return (
    <>
      <Common 
        name="Welcome to About Page"
        imgSrc={image2}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;