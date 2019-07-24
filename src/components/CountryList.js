import React from "react";

/**
 * Displays image and name of a list of countries passed as a prop
 * and has the ability to return the data of a clicked item.
 * @param {array} items - items to render
 * @param {function} onSelect - callback executed after clicking an item
 */
function CountryList({ items = [], onSelect = () => {} }) {
  return (
    <div className="CountryList">
      {items.map(x => (
        <Item key={x.name} {...x} onClick={() => onSelect(x)} />
      ))}
    </div>
  );
}

/**
 * The actual item for the list
 */
function Item({ name, flag, nativeName, onClick = () => {} }) {
  return (
    <button className="CountryList__Item" onClick={onClick}>
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

export default CountryList;
