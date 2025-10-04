import React from "react";
import { NavLink } from "react-router-dom";
import  hero  from "./images/hero-logo.webp";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center" style={{minHeight: "calc(100vh - 70px)"}}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="Common-h1">
                    {[props.name]}
                    <strong className="brand-name"> SyedSahil</strong>
                    {/* Grow your business with<strong className="brand-name"> SyedSahil</strong> */}
                  </h1>

                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>

                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className="img-fluid animated" alt="Common" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;