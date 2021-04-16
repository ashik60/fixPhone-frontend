import { faEnvelope, faMapMarker, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between footer-top py-5">
                    <div className="col-md-4 mb-5">
                        <h1>FixPhone</h1>
                        <p className="description">
                            FixPhone has very good strength in innovative technology and tools with
                            over 35 years of experience. <br />
                            <br />
                            We make long-term investments goal in global companies in different
                            sectors.
                        </p>
                        <button className="btn-rounded">Learn More</button>
                    </div>
                    <div className="col-md-3">
                        <h2>Quick Links</h2>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link>Read Our Blog</Link>
                            </li>
                            <li>
                                <Link to="/login">Sign up</Link>
                            </li>
                            <li>
                                <Link>Get Help</Link>
                            </li>
                            <li>
                                <Link>Read FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Get in Touch</h2>
                        <div className="contact">
                            <p>
                                <FontAwesomeIcon icon={faMapMarker} /> Vuter Goli, Gulshan-2, Dhaka
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> fixmyphone@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} /> +880 1723 121314
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Copyright &copy; 2021 FixPhone </small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3">
                            <Link>Privacy Policy.</Link>
                        </li>
                        <li className="list-inline-item  ml-3">
                            <Link>Terms of Use</Link>
                        </li>
                        <li className="list-inline-item  ml-3">
                            <Link>Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
