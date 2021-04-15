import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <div className="header text-white">
            <div className="caption d-flex align-items-center">
                <div className="ml-5">
                    <h3>Best services at your fingertip!</h3>
                    <p className="title">
                        Fast <span style={{ color: "#06ffff" }}>Repair</span> <br /> Your Smartphone
                    </p>
                    <button className="btn btn-success">Book a Service</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;