import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NotificationSystem from "../NotificationComponent";
import User from "../../pages/User";
import Navigation from "../NavigationComponent";
import CategoryComponent from "../CategoryComponent"
import Registration from "../../pages/Registration";
import Posts from "../../pages/Posts";
import Login from "../../pages/Login";
import PrivateRoute from "../PrivateRoute";
import AddPost from "../../pages/AddPost/";

const App = ({ user, logout }) => {
    return (
        <Fragment>
            <Router>
                <Navigation user={user} logout={logout} />
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Registration} />

                    <PrivateRoute path='/category' component={CategoryComponent} />
                    <PrivateRoute path='/addPost' component={AddPost} />
                    <PrivateRoute path='/user/profile' component={User} />
                    <PrivateRoute path='/' component={Posts} exact />
                </Switch>
            </Router>
            <NotificationSystem />
        </Fragment>
    );
};

export default App;
