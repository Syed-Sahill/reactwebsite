import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import  html from "./images/html.webp"

const About = () => {
  return (
    <>
      <Common 
        name="Welcome to About Page"
        imgSrc={html}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
