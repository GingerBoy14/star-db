import React, {Component} from "react";

import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import Page from "../Page";


export default class App extends Component{

    render() {
        return(
            <div className="container">
                <AppHeader/>
                <RandomPlanet/>
                <Page/>
            </div>
        );
    };
}
