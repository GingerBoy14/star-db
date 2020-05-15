import React, {Component} from "react";

import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import Page from "../Page";
import ErrorBoundry from "../Error/ErrorBoundry";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component{

    render() {
        return(
            <div className="container">
                <ErrorBoundry>
                    <Router>
                        <AppHeader />
                        <RandomPlanet updateInterval={6000}/>
                        <Route
                            path="/"
                            render={()=><h2>Welcome to Star DB</h2>}
                            exact/>
                        <Page/>
                    </Router>

                </ErrorBoundry>
            </div>
        );
    };
}
