import React from "react";
import "./AppHeader.css"
import { Link } from 'react-router-dom';
const AppHeader = () => {
        return(
            <nav className="navbar navbar-expand-md navbar-dark">
               <h3>
                   <Link
                       className="logo"
                       to="/">
                       Star DB
                   </Link>
               </h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link
                            className="nav-item nav-link"
                            to="/people/">
                            People
                        </Link>
                        <Link
                            className="nav-item nav-link"
                            to="/planet/">
                            Planet
                        </Link>
                        <Link
                            className="nav-item nav-link"
                            to="/starship/">
                            Star ship
                        </Link>
                    </div>
                </div>
            </nav>
        );
};
export default AppHeader;