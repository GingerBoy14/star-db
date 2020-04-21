import React, {Component} from "react";

import "./PersonDetails.css"

export default class PersonDetails extends Component{

    render() {
        return(
            <div className="person-detail card">
                <img className="person-image"
                     src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                     alt="Person"/>
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}