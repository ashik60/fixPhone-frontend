import React, { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import ServiceCard from "../../Home/ServiceCard/ServiceCard";

const Order = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://still-spire-38773.herokuapp.com/getServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div
                        className="col-md-10"
                        style={{ height: "100vh", marginRight: "0", backgroundColor: "#F4F7FC" }}
                    >
                        <h2 className="pt-5 animate__animated animate__fadeInLeft">
                            Purchase a service
                        </h2>
                        <div className="row animate__animated animate__fadeInRight">
                            {services.map((service) => (
                                <ServiceCard service={service} key={service._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
