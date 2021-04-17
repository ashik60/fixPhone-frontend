import React, { useContext } from "react";
import { UserContext } from "../../../App";
import dashboard from "../../../images/dashboard.png";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    const containerStyle = {
        height: "100%",
    };

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 bg-light">
                    <h1
                        style={{ fontSize: 50 }}
                        className="text-center mt-5 animate__animated animate__zoomIn"
                    >
                        Welcome <span className="text-success">{name}</span> to Dashboard
                    </h1>
                    <hr />

                    <div className="text-center my-5">
                        <img
                            src={dashboard}
                            alt=""
                            style={{ height: "500px" }}
                            className="img-fluid animate__animated animate__flipInX"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
