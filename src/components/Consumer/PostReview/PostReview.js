import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const PostReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, image } = loggedInUser;

    const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.userPhoto = image;
        fetch("https://still-spire-38773.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    setFormSuccessMessage("✔ Review posted successfully ");
                    setFormErrorMessage(null);
                    document.getElementById("myform").reset();
                } else {
                    setFormErrorMessage("Review post failed");
                    setFormSuccessMessage(null);
                }
            })
            .catch((err) => console.log(err));
    };

    const containerStyle = {
        height: "100%",
    };

    return (
        <div className="container-fluid" style={containerStyle}>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div
                    className="col-md-10 p-5"
                    style={{ height: "100vh", marginRight: "0", backgroundColor: "#F4F7FC" }}
                >
                    <div className="d-flex align-items-center">
                        <h1 className="animate__animated animate__fadeInLeft">Review</h1>
                        <div class="ml-auto">
                            <div className="row align-items-center animate__animated animate__fadeInRight">
                                <div className="col">
                                    <h5>{name}</h5>
                                    <p>
                                        <small className="text-secondary">{email}</small>
                                    </p>
                                </div>
                                <img
                                    src={image}
                                    alt=""
                                    className="mx-3 rounded-circle"
                                    width="60"
                                />
                            </div>
                        </div>
                    </div>
                    <form
                        className="customFormStyle mb-5"
                        onSubmit={handleSubmit(onSubmit)}
                        id="myform"
                    >
                        <div className="form-group animate__animated animate__fadeInRight">
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                className="form-control form-control-lg"
                                maxLength="20"
                                placeholder="Your name" /* value={name} */
                            />
                            {errors.name && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="form-group animate__animated animate__fadeInRight">
                            <input
                                type="text"
                                {...register("company", { required: true })}
                                name="company"
                                className="form-control form-control-lg"
                                maxLength="25"
                                placeholder="Company’s name, Designation"
                            />
                            {errors.company && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="form-group animate__animated animate__fadeInRight">
                            <textarea
                                type="text"
                                {...register("description", { required: true })}
                                name="description"
                                className="form-control"
                                cols="30"
                                rows="6"
                                maxLength="100"
                                placeholder="Description"
                            ></textarea>
                            {errors.description && (
                                <span className="text-danger">This field is required</span>
                            )}
                        </div>

                        <div className="d-flex justify-content-between">
                            <button
                                type="submit"
                                className="btn btn-info animate__animated animate__fadeInRight"
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
    );
};

export default PostReview;
