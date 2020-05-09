import React from "react";

import "./ItemView.css"

const Record = ({item, field, label}) =>{
  return(
      <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
      </li>
  );
};

const ItemView = ({item,children:{props:{children}}}) =>{
    const { name, img } = item;
    return(
        <React.Fragment>
                <img className="person-image"
                     src={`${img}`}
                     alt="Person"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(children, (child => {
                                return React.cloneElement(child,{ item });
                            }))
                        }
                    </ul>
                </div>
        </React.Fragment>
        );
};
export {Record}
export default ItemView;