import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import NotificationSystem from "./components/NotificationComponent";
import Registration from "./pages/Registration";
import Posts from "./pages/Posts";
import Login from "./pages/Login";

const App = ( ) => {
    return (
        <Fragment>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/register' component={Registration} />
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Posts} exact />
                </Switch>
            </Router>
            <NotificationSystem />
        </Fragment>
    );
};

export default App;
