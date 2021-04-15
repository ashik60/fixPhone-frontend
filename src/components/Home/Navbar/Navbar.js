import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <div className="d-flex flex-column flex-md-row bg-dark align-items-center p-3 px-md-4 ">
                <h5 className="my-0 mr-md-auto h2  text-white ">FixPhone</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-4 text-white ">
                        Home
                    </Link>
                    <Link to="/orders" className="p-4 text-white ">
                        Dashboard
                    </Link>
                    <Link to="/admin" className="p-4 text-white ">
                        Admin
                    </Link>
                    <Link to="/" className="p-4 text-white ">
                        Services
                    </Link>
                    {/* {loggedInUser.name ? (
                        <Link className="btn btn-outline-light">{loggedInUser.name}</Link>
                    ) : ( */}
                    <Link to="/login" className="p-4 text-white">
                        Login
                    </Link>
                    {/* )} */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
