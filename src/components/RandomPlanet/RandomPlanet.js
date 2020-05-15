import React, {Component} from "react";
import PropTypes from "prop-types"

import "./RandomPlanet.css"
import SwapiService from "../services/SwapiService"
import Spinner from "../Spinner";
import ErrorIndicator from "../Error/ErrorIndicator";


export default class RandomPlanet extends Component{
    swapiService = new SwapiService();
    static defaultProps = {
     updateInterval: 10000
    };
    static propsTypes = {
        updateInterval: PropTypes.number
    };
    state = {
        planet: {},
        error:false,
        loading: true
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false,
            error: false
        });
    };
    onError = () =>{
        this.setState({
            error:true,
            loading:false
        });
    };

    updatePlanet = () =>{
        const id = Math.floor(Math.random()*12)+1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;


        return(
            <div className="random-planet jumbotron rounded">
                {errorMassage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) =>{
    const {population, rPeriod, diam, name, img} = planet;
    return(
        <div className="row ">
            <img className="planet-image"
                 src={`${img}`}
                 alt="Planet"/>
            <div className="planet-disc">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{new Intl.NumberFormat().format(population)}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rPeriod} days</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diam}km</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
