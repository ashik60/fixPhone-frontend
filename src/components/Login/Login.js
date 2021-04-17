import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import googleLogo from "../../images/google-logo.png";
import firebaseConfig from "./firebase.config";
import "./Login.css";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, image: photoURL };
                setLoggedInUser(signedInUser);
                console.log(loggedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log("ERROR:", errorMessage);
            });
    };

    return (
        <div className="text-center mt-5">
            {/* <Header></Header> */}
            <div className="login-form">
                <h3>Login</h3>
                <button onClick={signInWithGoogle} className="btn w-75 border my-3">
                    <img src={googleLogo} style={{ height: "30px" }} alt="" /> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
