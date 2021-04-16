import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    let s = [1, 2, 3];
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
                    {s.map((a) => (
                        <ServiceCard key={a} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
