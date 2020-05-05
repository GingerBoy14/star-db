import ItemList from "../ItemList/ItemList";
import withData from "../HOC-helper/withData";
import SwapiService from "../services/SwapiService";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanet
} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanet);
const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};