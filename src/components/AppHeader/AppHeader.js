import React from "react";
import "./AppHeader.css"

const AppHeader = () => {
        return(
            <nav className="navbar navbar-expand-md navbar-dark">
               <h3 className="logo">Star DB</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">People</a>
                        <a className="nav-item nav-link" href="#">Planet</a>
                        <a className="nav-item nav-link" href="#">Star ship</a>
                    </div>
                </div>
            </nav>
        );
};
export default AppHeader;