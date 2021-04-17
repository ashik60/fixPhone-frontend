import React, { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AdminContext, UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
    const [isAdmin, setIsAdmin] = useContext(AdminContext);

    const options = [
        { value: "Pending", label: "Pending" },
        { value: "On Going", label: "On Going" },
        { value: "Cancel", label: "Cancel" },
    ];

    useEffect(() => {
        fetch("https://still-spire-38773.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const updateStatus = (e, id) => {
        fetch(`https://still-spire-38773.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: e.value }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Status updated successfully.");
                }
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                {isAdmin && (
                    <div
                        className="col-md-10 pt-3"
                        style={{ height: "100vh", background: "#F4F7FC" }}
                    >
                        <div>
                            <div className="shadow bg-white p-2 rounded">
                                <h1>All Orders: {orders.length} </h1>

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
                                                <td>
                                                    <Dropdown
                                                        options={options}
                                                        onChange={(e) => {
                                                            updateStatus(e, `${order._id}`);
                                                        }}
                                                        value={order.status}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderList;
