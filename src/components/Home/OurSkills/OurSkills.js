import React from "react";
import repair from "../../../images/repair.jpg";

const OurSkills = () => {
    return (
        <div className="p-5">
            <div style={{ height: "450px" }} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img width="100%" src={repair} alt="" />
                    </div>
                    <div className="col-md-5 ml-5 mt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <h1>
                                    Our <span style={{ color: "#7AB259" }}>Skills</span>
                                </h1>
                                <h5>We have extensive skills in Smartphone repairing services</h5>
                                <ul>
                                    <li>Water damaged smartphones</li>
                                    <li>Speaker/Microphone Faults.</li>
                                    <li>Network related issues.</li>
                                    <li>Physically damaged handsets.</li>
                                    <li>Broken screens & glass.</li>
                                    <li>Upgrading Operating System.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSkills;
