import React, { useContext, useEffect, useState } from "react";
import { AdminContext, UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("https://still-spire-38773.herokuapp.com/getServices")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        fetch("https://still-spire-38773.herokuapp.com/deleteService/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    fetch("https://still-spire-38773.herokuapp.com/getServices")
                        .then((res) => res.json())
                        .then((data) => {
                            setServices(data);
                            console.log(data);
                        })
                        .catch((err) => console.log(err));
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
                        className="col-md-10"
                        style={{ height: "100vh", marginRight: "0", backgroundColor: "#F4F7FC" }}
                    >
                        <h1 className="mt-3">Manage service</h1>
                        <div className="shadow p-2 rounded">
                            <table className="table  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Service Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="h6">
                                    {services.map((service) => (
                                        <tr key={service._id}>
                                            <td>{service.title}</td>
                                            <td>${service.price}</td>
                                            <td onClick={() => handleDelete(service._id)}>
                                                <img
                                                    height="30px"
                                                    style={{ cursor: "pointer" }}
                                                    src={"https://i.ibb.co/wN1K49B/Group-33150.png"}
                                                    alt="Delete"
                                                ></img>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageServices;
