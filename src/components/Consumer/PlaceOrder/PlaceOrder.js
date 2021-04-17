import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const PlaceOrder = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    // const { title, description, price } = service;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderPlaced, setOrderPlaced] = useState(false);

    axios
        .get("http://localhost:5000/services/" + id)
        .then((res) => setService(res.data[0]))
        .catch((err) => console.log(err));

    const handlePaymentSuccess = () => {
        axios
            .post("http://localhost:5000/postOrder", {
                title: service.title,
                price: service.price,
                description: service.description,
                date: new Date(),
                email: loggedInUser.email,
                name: loggedInUser.name,
                status: "Pending",
            })
            .then((response) => {
                console.log(response);
                setOrderPlaced(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10  mt-5">
                        <h3>{service.title}</h3> <br />
                        <div className="row">
                            <div className="col">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={loggedInUser.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={loggedInUser.name}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col">
                                <p>You will be cahrged ${service.price}.</p>
                                <h6 className="text-muted">Pay with card</h6>
                                <ProcessPayment handlePayment={handlePaymentSuccess} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
