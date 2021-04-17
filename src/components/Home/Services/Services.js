import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/getServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div style={{ backgroundColor: "#ccc7c7e0" }} className="pb-5 pt-5">
            <div className="container" id="services">
                <div className="text-center">
                    <h1 className="">
                        Our <span style={{ color: "#7AB259" }}>Services</span>{" "}
                    </h1>
                    <p className="">
                        All kind of brands smartphones get repaired here. Our Expert team will look
                        after it.
                    </p>
                </div>

                <div className="row">
                    {services.map((service) => (
                        <ServiceCard service={service} key={service._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
