import React, {Component} from "react";

import "./PersonDetails.css"
import Spinner from "../../Spinner";
import ErrorIndicator from "../../ErrorIndicator";

export default class PersonDetails extends Component{

    state = {
        item: null,
        loading: true
    };


    componentDidMount() {
        this.updateItem();
    }


    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId){
            this.setState({loading:true});
            this.updateItem();
        }
    }

    updateItem(){
        const { itemId,getItemData } = this.props;
        if (!itemId){
            return;
        }
        getItemData(itemId)
            .then((item) =>{
                this.setState({
                    item,
                    loading: false,
                    error:false
                })
            })
            .catch(()=>this.setState({error:true}))
    }

    render() {
        const {item, loading, error} = this.state;


        const hasData = !(loading || error);

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading && item ? <Spinner/> : null;
        const content = hasData ? <PersonView person={item}/> : null;
        const select = !item&&!error ? <span>Select a person from a list</span> : null;
        return(
            <div className="person-detail card">
                {spinner}
                {select}
                {errorMassage}
                {content}
            </div>
        );
    };
}

const PersonView = ({person}) =>{
    const { name, gender, birthYear, eyeColor, img} = person;
    return(
        <React.Fragment>
                <img className="person-image"
                     src={`${img}`}
                     alt="Person"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
        );
};
