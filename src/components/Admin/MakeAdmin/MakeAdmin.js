import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AdminContext, UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const [isAdmin, setIsAdmin] = useContext(AdminContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://still-spire-38773.herokuapp.com/adminEmail", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    // alert('Email Added Successfully!!')
                    setFormSuccessMessage("Email Added Successfully ✔️");
                    setFormErrorMessage(null);
                    document.getElementById("myform").reset(); //reset form data
                } else {
                    setFormErrorMessage("Email Adding Failed! ❌");
                    setFormSuccessMessage(null);
                }
            });
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>

                    {isAdmin && (
                        <div
                            className="col-md-10"
                            style={{ height: "100vh", background: "#F4F7FC" }}
                        >
                            <div className="d-flex align-items-center dashboardHeaderBg p-5">
                                <h1 className="animate__animated animate__fadeInLeft">Add Admin</h1>
                                <div class="ml-auto">
                                    <div className="row align-items-center animate__animated animate__fadeInRight">
                                        <div className="col">
                                            <h5>{name}</h5>
                                            <p>
                                                <small className="text-secondary">{email}</small>
                                            </p>
                                        </div>
                                        <img
                                            src={photoURL}
                                            alt=""
                                            className="mx-3 rounded-circle"
                                            width="60"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="customFormStyle">
                                <div className="form-group bg-white p-5" style={{ width: "800px" }}>
                                    <label htmlFor="">Email</label>
                                    <form class="" onSubmit={handleSubmit(onSubmit)} id="myform">
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                {...register("email", { required: true })}
                                                class="form-control"
                                                id=""
                                                placeholder="jon@gamil.com"
                                            />
                                            {errors.email && (
                                                <span className="text-danger">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <button
                                                type="submit"
                                                className="btn btnSubmit animate__animated animate__fadeInRight"
                                            >
                                                Submit
                                            </button>

                                            <div>
                                                {formSuccessMessage && (
                                                    <p className="animate__animated animate__fadeInDown formSubmitMsgStyle">
                                                        {formSuccessMessage}
                                                    </p>
                                                )}
                                                {formErrorMessage && (
                                                    <p
                                                        className="animate__animated animate__fadeInDown"
                                                        style={{ color: "red" }}
                                                    >
                                                        {formErrorMessage}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
