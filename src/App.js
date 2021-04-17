import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageService/ManageService";
import OrderList from "./components/Admin/OrderList/OrderList";
import BookingList from "./components/Consumer/BookingList/BookingList";
import Order from "./components/Consumer/Order/Order";
import PlaceOrder from "./components/Consumer/PlaceOrder/PlaceOrder";
import PostReview from "./components/Consumer/PostReview/PostReview";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const AdminContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [admin, setAdmin] = useState();
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <AdminContext.Provider value={[admin, setAdmin]}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/addService">
                            <AddService />
                        </PrivateRoute>
                        <PrivateRoute path="/makeAdmin">
                            <MakeAdmin />
                        </PrivateRoute>
                        <PrivateRoute path="/manageService">
                            <ManageServices />
                        </PrivateRoute>
                        <PrivateRoute path="/orderList">
                            <OrderList />
                        </PrivateRoute>
                        <PrivateRoute path="/placeOrder/:id">
                            <PlaceOrder />
                        </PrivateRoute>
                        <PrivateRoute path="/bookingList">
                            <BookingList />
                        </PrivateRoute>
                        <PrivateRoute path="/postReview">
                            <PostReview />
                        </PrivateRoute>
                        <PrivateRoute path="/order">
                            <Order />
                        </PrivateRoute>

                        <Route path="*">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </AdminContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
