import React from "react";
import  view from "./images/view.jpg"
import Card from "./Card";
import SDate from "./SData";

const Service = () =>{
    return(
        <>
        <div className="my-5">
           <h1 className="text-center">Our Services</h1>
            <div className="container mb-5">
           <div className="row gy-4">
                {
                    SDate.map((val , ind) =>{
                        return ( 
                            <div className="col-md-4 col-10  mx-auto" key={ind}>
                            <Card imgsrc={val.imgsrc} title={val.title} />
                        </div>
                        )
                    })
                }
            </div>
           </div>
           </div>
        </>
    )
}

export default Service