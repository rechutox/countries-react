import React from "react";
import CountryListItem from "./CountryListItem";

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
        <CountryListItem key={x.name} {...x} onClick={() => onSelect(x)} />
      ))}
    </div>
  );
}

export default CountryList;
