import React, {Component} from "react";

import "./Page.css"

import { SwapiServiceProvider } from "../SwapiServiceContext";

import SwapiService from "../services/SwapiService";
import { PlanetPage, StarshipPage, PeoplePage } from "../Pages";
import { Route } from "react-router-dom"
import {StarshipDetails} from "../sw-components";
export default class Page extends Component{

    state ={
        swapiService: new SwapiService()
    };

    render() {
        return(
            <SwapiServiceProvider value={this.state.swapiService}>

                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planet" component={PlanetPage}/>
                <Route path="/starship" component={StarshipPage} exact/>
                <Route path="/starship/:id"
                       render={({ match })=>{
                    const { id } = match.params;
                    return <StarshipDetails  itemId={ id }/>;
                }
                }/>
            </SwapiServiceProvider>
        );
    };

}