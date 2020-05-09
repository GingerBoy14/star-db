import React, {Component} from "react";

import "./Page.css"

import Row from "./Row";
import ErrorBoundry from "../Error/ErrorBoundry";
import { SwapiServiceProvider } from "../SwapiServiceContext";
import {
        PersonList,
        PlanetList,
        StarshipList,
        PersonDetails,
        PlanetDetails,
        StarshipDetails
    } from "../sw-components";
import SwapiService from "../services/SwapiService";


export default class Page extends Component{
    swapiService = new SwapiService();
    state ={
        itemId:null
    };
    onItemSelected = (itemId) =>{
        this.setState({ itemId });
    };

    render() {
        const itemList = (
            <ErrorBoundry>
                <StarshipList
                    onItemSelected={this.onItemSelected}/>
            </ErrorBoundry>
        );
        const personDetail = (
            <ErrorBoundry>
                <StarshipDetails
                    itemId={this.state.itemId}/>
            </ErrorBoundry>
        );

        return(
            <SwapiServiceProvider value={this.swapiService}>
                <Row left={itemList} right={personDetail}/>
            </SwapiServiceProvider>
        );
    };

}