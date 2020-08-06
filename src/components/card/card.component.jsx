import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.user.id}?set=set@&size=180x180`}
      alt="user"
    />
    <h1>{props.user.name}</h1>
    <p>{props.user.email}</p>
  </div>
);
