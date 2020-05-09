import ItemList from "../ItemList";
import {
    withSwapiService,
    withChildFunction,
    withListData,
    compose
} from "../HOC-helper";


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
const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withListData,
                      withChildFunction(render)
                   )(ItemList);
const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withListData,
                      withChildFunction(render)
                   )(ItemList);
const StarshipList = compose(
                        withSwapiService(mapStarshipsMethodsToProps),
                        withListData,
                        withChildFunction(renderStarship)
                     )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};