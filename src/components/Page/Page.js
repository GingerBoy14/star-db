import React, {Component} from "react";

import "./Page.css"

import Row from "./Row";
import ErrorBoundry from "../Error/ErrorBoundry/ErrorBoundry";
import {PersonList,
        PlanetList,
        StarshipList,
        PersonDetails,
        PlanetDetails,
        StarshipDetails
    } from "../sw-components";


export default class Page extends Component{
    state ={
        itemId:null
    };
    onItemSelected = (id) =>{
        this.setState({
            itemId:id
        })
    };
    render() {
        const itemList = (
            <ErrorBoundry>
                <StarshipList
                    onItemSelected={this.onItemSelected}>
                    {(i)=>(
                        `${i.name}`
                    )}
                </StarshipList>
            </ErrorBoundry>
        );
        const personDetail = (
            <ErrorBoundry>
                <StarshipDetails itemId={this.state.itemId}/>
            </ErrorBoundry>
        );

        return(

            <Row left={itemList} right={personDetail}/>

        );
    };

}