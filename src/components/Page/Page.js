import React, {Component} from "react";

import "./Page.css"

import { SwapiServiceProvider } from "../SwapiServiceContext";

import SwapiService from "../services/SwapiService";
import {
    PlanetPage,
    StarshipPage,
    PeoplePage,
    LoginPage,
    SecretPage} from "../Pages";
import { Route, Switch } from "react-router-dom"
import { StarshipDetails } from "../sw-components";


export default class Page extends Component{

    state ={
        swapiService: new SwapiService(),
        isLoggedIn:false
    };

    onLogin = () =>{
        this.setState({isLoggedIn:true})
    };
    render() {
        const { isLoggedIn } = this.state;
        return(
            <SwapiServiceProvider value={this.state.swapiService}>
                <Switch>
                    <Route
                        path="/"
                        render={()=><h2>Welcome to Star DB</h2>}
                        exact/>
                    <Route path="/people/:id?" component={PeoplePage}/>
                    <Route path="/planet" component={PlanetPage}/>
                    <Route path="/starship" component={StarshipPage} exact/>
                    <Route path="/starship/:id"
                           render={({ match })=>{
                               const { id } = match.params;
                               return <StarshipDetails  itemId={ id }/>;
                           }
                           }/>
                    <Route
                        path="/login"
                        render={()=>(
                            <LoginPage
                                isLoggedIn={isLoggedIn}
                                onLogin={this.onLogin}/>
                        )}/>
                    <Route
                        path="/secret"
                        render={()=>(
                            <SecretPage
                                isLoggedIn={isLoggedIn}/>
                        )}/>
                    <Route
                        render={()=>(
                            <h2>Page not found</h2>
                        )}/>
                </Switch>

            </SwapiServiceProvider>
        );
    };

}