import React, {Component} from "react";

import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import Page from "../Page";
import ErrorBoundry from "../Error/ErrorBoundry";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component{

    render() {
        return(
            <div className="container">
                <ErrorBoundry>

                    <Router>
                        <AppHeader />
                        <RandomPlanet updateInterval={6000}/>
                        <Page/>
                    </Router>

                </ErrorBoundry>
            </div>
        );
    };
}
