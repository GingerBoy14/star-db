import React from 'react';
import ItemView, {Record} from "../ItemView/ItemView";
import dataDetails from "../HOC-helper/dataDetails";
import SwapiService from "../services/SwapiService";

const swapiService = new SwapiService();

const {
    getPerson,
    getStarship,
    getPlanet
} = swapiService;

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

const PersonDetails = dataDetails(ItemView, getPerson,personField);

const PlanetDetails = dataDetails(ItemView, getPlanet,planetField);
const StarshipDetails = dataDetails(ItemView, getStarship,starShipField);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};