import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <div className="header text-white animate__animated  animate__slideInLeft">
            <div className="caption d-flex align-items-center">
                <div className="container">
                    <h3>Best services at your fingertip!</h3>
                    <p className="title">
                        Fast <span className="highlight">Repair</span> <br /> Your Smartphone
                    </p>
                    <button className="btn btn-success">Book a Service</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
