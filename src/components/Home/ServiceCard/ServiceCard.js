import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
    const { title, description, price, imgURL, _id } = service;
    return (
        <div className="col-md-4 ">
            <Link to={"/placeOrder/" + _id} style={{ textDecoration: "none" }}>
                <div
                    className="card custom-card-style my-5"
                    style={{ height: "350px" }}
                >
                    <div className="card-body ">
                        <img
                            className="cardImage"
                            style={{ height: "150px", width: "100%" }}
                            src={imgURL}
                            alt=""
                        />
                        <h3 className="text-dark">{title}</h3>
                        <p className="text-secondary">{description}</p>
                        <h4 className="text-secondary">Price: ${price}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;
