import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

const BookingList = ({ allOrders }) => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext();
    const email = loggedInUser.email;

    useEffect(() => {
        fetch("http://localhost:50000/" + email)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((err) => console.log(err));
    }, [email]);

    return (
        <div>
            <div className="container">
                <h1>All Orders: {orders.length} </h1>
                <div className="shadow p-2 rounded">
                    <table className="table  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Email</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="h6">
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.title}</td>
                                    <td>{order.date.slice(0, 10)}</td>
                                    <td>{order.email}</td>
                                    <td>{order.price}</td>
                                    <td>${order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
