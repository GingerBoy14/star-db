import React from "react";
import "./ErrorIndicator.css"
import icon from "./droid2.png"

const ErrorIndicator = () =>(
    <div className="error-indicator">
        <h3 className="boom">BOOM!</h3>
        <span>
            something has gone terribly wrong
        </span>
        <span>
            (but we already sent droids to fix it)
        </span>
        <img src={icon} alt="droid"/>
    </div>
);
export default ErrorIndicator;