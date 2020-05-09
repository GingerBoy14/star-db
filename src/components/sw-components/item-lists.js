import ItemList from "../ItemList";
import { withData } from "../HOC-helper";
import React from "react";
import withSwapiService from "../HOC-helper/withSwapiService";



const withChildrenFunction = (Wrapper,ch) =>{
    return (props) =>{
        return(
            <Wrapper {...props}>
            {ch}
             </Wrapper>
        )}
};

const render = (({name})=>(`${name}`));
const renderStarship = (({name, model})=>(`${name} (${model})`));

const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanet
    };
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    };
};
const PersonList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList,render)),
                        mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList,render)),
                        mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList,renderStarship)),
                        mapStarshipsMethodsToProps
);

export {
    PersonList,
    PlanetList,
    StarshipList
};