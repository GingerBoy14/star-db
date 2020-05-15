import React from "react";
import { PersonDetails, PersonList} from "../sw-components";
import Row from "../Row";
import ErrorBoundry from "../Error/ErrorBoundry";
import { withRouter } from "react-router-dom";
const  PeoplePage = ({ history, match }) => {
        const personList = (
            <ErrorBoundry>
                <PersonList
                    onItemSelected={(id)=>history.push(id)}/>
            </ErrorBoundry>
        );
        const { id } = match.params;
        const personDetail = (
            <ErrorBoundry>
                <PersonDetails
                    itemId={id}/>
            </ErrorBoundry>
        );
        return (
            <Row
                left={personList}
                right={personDetail}/>
        );
    };

export default withRouter(PeoplePage);

