import React, {Component} from "react";

import "./Page.css"
import ItemList from "../ItemList";
import PersonDetails from "../details/PersonDetails";
import SwapiService from "../services/SwapiService";
import Row from "./Row";


export default class Page extends Component{
    swapiServise = new SwapiService();
    state ={
        itemId:null
    };
    onItemSelected = (id) =>{
        this.setState({
            itemId:id
        })
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiServise.getAllPeople}
                renderItem={({name, gender, birthYear})=>
                    (`${name} (${gender},${birthYear})`)}/>
        );
        const personDetail = (
            <PersonDetails itemId={this.state.itemId}
                           getItemData={this.swapiServise.getPerson}/>
        );
        return(
           <Row left={itemList} right={personDetail}/>
        );
    };
}