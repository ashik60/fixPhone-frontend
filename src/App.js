import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageService/ManageService";
import OrderList from "./components/Admin/OrderList/OrderList";
import PlaceOrder from "./components/Consumer/PlaceOrder/PlaceOrder";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/addService">
                        <AddService />
                    </Route>
                    <Route path="/makeAdmin">
                        <MakeAdmin />
                    </Route>
                    <Route path="/manageService">
                        <ManageServices />
                    </Route>
                    <Route path="/orderList">
                        <OrderList />
                    </Route>
                    <PrivateRoute path="/placeOrder/:id">
                        <PlaceOrder />
                    </PrivateRoute>
                    {/* 
                <PrivateRoute path="/checkout/:id">
                    <Checkout />
                </PrivateRoute>
                
                <Route path="*">
                    <NoMatch />
                </Route> */}
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
