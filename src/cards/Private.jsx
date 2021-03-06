import React from "react";

const Private = ({ name, price, revenue, icon, players, description }) => {
  return (
    <div className="cutlines">
      <div className="card private">
        {icon && <div className="private__icon">{icon}</div>}
        <div className="private__name">{name}</div>
        <div className="private__description">{description}</div>
        <div className="private__price">{price}</div>
        {players && <div className="private__players">{players}</div>}
        {revenue && <div className="private__revenue">Revenue: {revenue}</div>}
      </div>
    </div>
  );
};

export default Private;
