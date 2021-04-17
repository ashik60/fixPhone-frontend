import {
    faCommentDots,
    faList,
    faPlus,
    faShoppingCart,
    faSignOutAlt,
    faTasks,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";
import firebaseConfig from "../../Login/firebase.config";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, []);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        phone: "",
    });

    // google sign-out
    const handleSignOut = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase
            .auth()
            .signOut()
            .then((res) => {
                const signOutUser = {
                    isSignedIn: false,
                    name: "",
                    email: "",
                    photo: "",
                };
                setUser(signOutUser);
                setLoggedInUser({});
                console.log(res);
            })

            .catch((err) => {
                console.log(err);
                console.log(err.message);
            });
    };

    return (
        <div
            className="sidebar d-flex flex-column justify-content-between position-fixed"
            style={{ height: "100vh" }}
        >
            <ul className="list-unstyled">
                <a className="navbar-brand mt-5" href="/">
                    <img src={logo} alt="" style={{ height: "50px" }} />
                </a>

                <div className="my-5">
                    <li>
                        <Link to="/orderForm" className="sideBarlink">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList" className="sideBarlink">
                            <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/postReview" className="sideBarlink">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/payment" className="sideBarlink">
                            <FontAwesomeIcon icon={faMoneyCheckAlt} /> <span>Payment</span>
                        </Link>
                    </li> */}
                </div>

                {isAdmin && (
                    <div>
                        <li>
                            <Link to="/orderList" className="sideBarlink">
                                <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="sideBarlink">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="sideBarlink">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="sideBarlink">
                                <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
            <div className="text-center my-5">
                <Link to="/" onClick={handleSignOut} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} />{" "}
                    <span className="logoutBtn">Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
