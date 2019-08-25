import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Posts from "./pages/Posts";

const App = ( ) => {
    return (
        <Fragment>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/' component={Posts} exact />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
