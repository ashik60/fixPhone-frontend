import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="bg-dark">
            <div className="d-flex container flex-column flex-md-row  align-items-center p-3 px-md-4 ">
                <h5 className="my-0 mr-md-auto h2  text-white">FixPhone</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-4 text-white ">
                        Home
                    </Link>
                    <Link to="/dashboard" className="p-4 text-white ">
                        Dashboard
                    </Link>

                    <a href="#services" className="p-4 text-white ">
                        Services
                    </a>
                    <a href="#team" className="p-4 text-white ">
                        Our Team
                    </a>
                    <a href="#review" className="p-4 text-white ">
                        Reviews
                    </a>
                    {loggedInUser.name ? (
                        <span className="pl-4 text-white">{loggedInUser.name}</span>
                    ) : (
                        <Link to="/login" className="pl-4 text-white">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
