import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AddService = () => {
    const [service, setService] = useState({
        title: "",
        price: "",
        description: "",
        imgURL: "",
    });
    // const [file, setFile] = useState(null);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    const [formSuccessMessage, setFormSuccessMessage] = useState(null);
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const [isAdmin, setIsAdmin] = useState(true);

    // useEffect(() => {
    //     fetch("http://localhost:5000/isAdmin", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email: loggedInUser.email }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setIsAdmin(data));
    // }, []);

    const handleBlur = (e) => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
        console.log(newService);
    };

    const onSubmit = (e) => {
        fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(service),
        });
        e.preventDefault();

        // .then((res) => res.json())
        // .then((success) => {
        //     if (success) {
        //         // alert('Service Added Successfully!')
        //         setFormSuccessMessage("Service Added Successfully ✔️");
        //         setFormErrorMessage(null);
        //         document.getElementById("myform").reset(); //reset form data
        //     } else {
        //         setFormErrorMessage("Service post failed ❌");
        //         setFormSuccessMessage(null);
        //     }
        // })
        // .catch((err) => console.log(err));
    };

    const handleFileChange = (e) => {
        // const newFile = e.target.files[0];
        // setFile(newFile);
        const imageData = new FormData();
        imageData.set("key", "562ec4a82955b6ffb86f48b59bc647db");
        imageData.append("image", e.target.files[0]);
        // setUploadingStyle({ display: "block" });

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((response) => response.data.data.display_url)
            .then((response) => {
                console.log(response);
                const newItem = { ...service };
                newItem.imgURL = response;
                setService(newItem);
                console.log(newItem);
            })
            .then((res) => alert("Image Uploaded successfully."))
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            {isAdmin && (
                <div className="container-fluid row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-10" style={{ height: "100vh", background: "#F4F7FC" }}>
                        <div className="d-flex align-items-center dashboardHeaderBg p-5">
                            <h1 className="animate__animated animate__fadeInLeft">Add Service</h1>
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

                        <form onSubmit={onSubmit} className="customFormStyle" id="myform">
                            <div className="bg-white p-5" style={{ width: "100%" }}>
                                <div className="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <label htmlFor="">Service Title</label>
                                            <input
                                                onChange={handleBlur}
                                                type="text"
                                                name="title"
                                                className="form-control form-control-lg"
                                                maxlength="60"
                                                placeholder="Enter title (max 60 characters)"
                                                required
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Service Cost</label>
                                            <input
                                                onChange={handleBlur}
                                                type="number"
                                                name="price"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Cost"
                                                required
                                            />
                                        </div>
                                        <div class="col">
                                            <input
                                                onChange={handleFileChange}
                                                type="file"
                                                className="btn w-100 form-control-lg btnUploadFile form-control"
                                                required
                                            />{" "}
                                            Upload Image
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <textarea
                                        onChange={handleBlur}
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        maxlength="120"
                                        cols="30"
                                        rows="6"
                                        placeholder="Enter Description (max 120 characters)"
                                        required
                                    ></textarea>
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
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddService;
