import React from 'react';
import ItemView, { Record } from "../ItemView";
import {
    withDetailsData,
    withSwapiService,
    withChildFunction,
    compose} from "../HOC-helper";


const personField = (
    <React.Fragment>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
        <Record field="birthYear" label="Birth Year"/>
    </React.Fragment>);
const planetField = (
    <React.Fragment>
        <Record field="population" label="Population"/>
        <Record field="rPeriod" label="Rotation Period"/>
        <Record field="diam" label="Diameter"/>
    </React.Fragment>);
const starShipField = (
    <React.Fragment>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
    </React.Fragment>);

const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPerson
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet
    };
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getStarship
    };
};
const PersonDetails = compose(
                         withSwapiService(mapPersonMethodsToProps),
                         withDetailsData,
                         withChildFunction(personField)
                      )(ItemView);

const PlanetDetails =  compose(
                          withSwapiService(mapPlanetMethodsToProps),
                          withDetailsData,
                          withChildFunction(planetField)
                       )(ItemView);

const StarshipDetails = compose(
                           withSwapiService(mapStarshipsMethodsToProps),
                           withDetailsData,
                           withChildFunction(starShipField)
                        )(ItemView);
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};