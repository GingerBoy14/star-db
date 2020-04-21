import React, {Component} from "react";

import AppHeader from "../AppHeader";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../details/PersonDetails";


export default class App extends Component{

    render() {
        return(
            <div className="container">
                <AppHeader/>
                <RandomPlanet/>
                <div className="row">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    };
}
