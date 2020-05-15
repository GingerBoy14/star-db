import React from "react";
import PropTypes from "prop-types"
const Row = ({right,left}) => (
    <div className="row">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
);
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};
export default Row;