import React, {Component} from "react";
import { PersonDetails, PersonList} from "../sw-components";
import Row from "../Row";
import ErrorBoundry from "../Error/ErrorBoundry";
export default class PeoplePage extends Component{
    state = {
        selectedItem: null
    };
    onItemSelected = (selectedItem) =>{
        this.setState({ selectedItem });
    };

    render() {
        const personList = (
            <ErrorBoundry>
                <PersonList
                    onItemSelected={this.onItemSelected}/>
            </ErrorBoundry>
        );
        const personDetail = (
            <ErrorBoundry>
                <PersonDetails
                    itemId={this.state.selectedItem}/>
            </ErrorBoundry>
        );
        return (
            <Row
                left={personList}
                right={personDetail}/>
        );
    }

}