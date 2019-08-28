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
import AddPost from "../../pages/AddPost";
import Post from "../../pages/Post";

const App = ({ user, logout }) => {
    return (
        <Fragment>
            <Router>
                <Navigation user={user} logout={logout} />
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Registration} />
                    <PrivateRoute path='/profile' component={User} />
                    <PrivateRoute path='/' component={Posts} exact />
                    <PrivateRoute path='/addPost' component={AddPost} />
                    <PrivateRoute path='/post/:postId' component={Post} />
                </Switch>
            </Router>
            <NotificationSystem />
        </Fragment>
    );
};

export default App;
