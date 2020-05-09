import React, {Component} from "react";
import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../Row";
import ErrorBoundry from "../Error/ErrorBoundry";
export default class StarshipPage extends Component{
    state = {
        selectedItem: null
    };
    onItemSelected = (selectedItem) =>{
        this.setState({ selectedItem });
    };

    render() {
        const planetList = (
            <ErrorBoundry>
                <PlanetList
                    onItemSelected={this.onItemSelected}/>
            </ErrorBoundry>
        );
        const planetDetail = (
            <ErrorBoundry>
                <PlanetDetails
                    itemId={this.state.selectedItem}/>
            </ErrorBoundry>
        );
        return (
            <Row
                left={planetList}
                right={planetDetail}/>
        );
    }

}