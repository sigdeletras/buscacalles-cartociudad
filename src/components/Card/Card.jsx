import React from "react";

import "./Card.css";

const Card = (data) => {
  const item = data.data;
  const postalcode = item.postalCode ? `CP ` + item.postalCode : ``;

  return (
    <div className="card">
      <p className="card__title">{item.address}</p>
      <div className="card__info">

        <p className="card__info--city">Tipo {item.type}</p>
        <p className="card__info--city">{postalcode ? (postalcode + ` ` + item.province) : item.province}</p>
        <p className="card__info--message">
          {item.stateMsg}
        </p>
      </div>
    </div>
  );
};

export default Card;
