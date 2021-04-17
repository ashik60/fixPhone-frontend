import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
    const { title, description, price, imgURL, _id } = service;
    return (
        <div className="col-md-4 ">
            <Link to={"/placeOrder/" + _id} style={{ textDecoration: "none" }}>
                <div className="card custom-card-style my-5 border border-secondary rounded trans-card">
                    <div className="card-body ">
                        {/* {
                            allServices.image ? <img className="rounded-circle " style={{ height: '40px' }} src={`data:image/png;base64,${allServices.image.img}`} alt="" />
                                :
                                <img className="rounded-circle" style={{ height: '40px' }} src={`https://fierce-cliffs-21804.herokuapp.com/getServices/${image.img}`} alt="" />
                        }
                        <h3 className="text-dark">{title}</h3>
                        <p className="text-secondary">{description}</p> */}
                        <img style={{ height: "200px" }} src={imgURL} alt="" />
                        <h3 className="text-dark">{title}</h3>
                        <p className="text-secondary">{description}</p>
                        <h4 className="text-secondary">Price: {price}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;
