import React from "react";
// import  view  from "./images/view.jpg"
import { NavLink } from "react-router-dom";

const Card = (props) =>{
    return(
        <>
                <div className="card" style={{width : "18rem"}}>
                <img  src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some Quick Exapmle Text</p>
                <NavLink to="#" className="btn btn-primary">Go SomeWhere</NavLink>
                </div>
                </div>
        </>
    )
}

export default Card;