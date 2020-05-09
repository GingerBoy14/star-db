import React, {Component} from "react";

import "./Page.css"

import { SwapiServiceProvider } from "../SwapiServiceContext";

import SwapiService from "../services/SwapiService";
import { PlanetPage, StarshipPage, PeoplePage } from "../Pages";

export default class Page extends Component{

    state ={
        swapiService: new SwapiService()
    };

    render() {
        return(
            <SwapiServiceProvider value={this.state.swapiService}>
                <PeoplePage/>
                <PlanetPage/>
                <StarshipPage/>
            </SwapiServiceProvider>
        );
    };

}