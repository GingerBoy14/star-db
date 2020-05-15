import React from "react";
import { StarshipList } from "../sw-components";
import ErrorBoundry from "../Error/ErrorBoundry";
import { withRouter } from "react-router-dom";
const StarshipPage = ({ history }) =>{
    return(
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(id)=>history.push(id)}/>
        </ErrorBoundry>
    );
};
export default withRouter(StarshipPage);