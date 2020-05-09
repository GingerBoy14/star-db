import React from 'react';
import ItemView, { Record } from "../ItemView";
import { ItemDetails } from "../HOC-helper";
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

const PersonDetails = ItemDetails(ItemView, getPerson, personField);

const PlanetDetails = ItemDetails(ItemView, getPlanet, planetField);
const StarshipDetails = ItemDetails(ItemView, getStarship, starShipField);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};