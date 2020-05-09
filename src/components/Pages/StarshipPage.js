import React, {Component} from "react";
import { StarshipList, StarshipDetails } from "../sw-components";
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
        const starshipList = (
            <ErrorBoundry>
                <StarshipList
                    onItemSelected={this.onItemSelected}/>
            </ErrorBoundry>
        );
        const starshipDetail = (
            <ErrorBoundry>
                <StarshipDetails
                    itemId={this.state.selectedItem}/>
            </ErrorBoundry>
        );
        return (
            <Row
                left={starshipList}
                right={starshipDetail}/>
        );
    }

}