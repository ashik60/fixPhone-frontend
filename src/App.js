import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                {/* <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/checkout/:id">
                    <Checkout />
                </PrivateRoute>
                <PrivateRoute path="/orders">
                    <Orders />
                </PrivateRoute>
                <PrivateRoute path="/admin">
                    <Admin />
                </PrivateRoute>
                <Route path="*">
                    <NoMatch />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default App;
