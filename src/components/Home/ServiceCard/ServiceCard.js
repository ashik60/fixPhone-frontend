import React from "react";
import { Link } from "react-router-dom";
import service from "../../../images/service4.png";
import './ServiceCard.css'

const ServiceCard = () => {
    return (
        <div className="col-md-4 ">
            {/* <Link to={'/dashboard'} style={{ textDecoration: 'none' }} > */}
            <Link to={"/orderForm"} style={{ textDecoration: "none" }}>
                <div
                    className="card custom-card-style my-5 border border-secondary rounded trans-card"
                    style={{ height: 250 }}
                >
                    <div className="card-body ">
                        {/* {
                            allServices.image ? <img className="rounded-circle " style={{ height: '40px' }} src={`data:image/png;base64,${allServices.image.img}`} alt="" />
                                :
                                <img className="rounded-circle" style={{ height: '40px' }} src={`https://fierce-cliffs-21804.herokuapp.com/getServices/${image.img}`} alt="" />
                        }
                        <h3 className="text-dark">{title}</h3>
                        <p className="text-secondary">{description}</p> */}
                        <img
                            className="rounded-circle"
                            style={{ height: "40px" }}
                            src={service}
                            alt=""
                        />
                        <h3 className="text-dark">Service Name</h3>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            officiis omnis dignissimos minima est quaerat cupiditate distinctio,
                            quae eius nemo!
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;
