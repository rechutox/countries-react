import React from "react";

/**
 * A clickable card shoing a flag and country name
 */
function CountryListItem({ name, flag, nativeName, onClick = () => {} }) {
  return (
    <button className="CountryListItem" onClick={onClick}>
      <figure className="flag">
        <img src={flag} alt={name} />
      </figure>
      <div className="content">
        <h1 className="name">{name}</h1>
        <h3 className="native">{nativeName}</h3>
      </div>
    </button>
  );
}

export default CountryListItem;
