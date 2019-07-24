import React from "react";

/**
 * Renders the country info.
 * @todo add a OPSM or Google map!
 * @todo get some fun facts from somewhere
 * @todo make it prettier
 * @param {object} data - the country data as fetched from the API
 */
function CountryInfo({ data = {} }) {
  return (
    <div className="CountryInfo">
      <figure className="flag">
        <img src={data.flag} alt={data.name} />
      </figure>
      <div className="info-table">
        <div className="row">
          <div className="left">English name</div>
          <div className="right">{data.name}</div>
        </div>
        <div className="row">
          <div className="left">Native name</div>
          <div className="right">{data.nativeName}</div>
        </div>
        <div className="row">
          <div className="left">Capital</div>
          <div className="right">{data.capital}</div>
        </div>
        <div className="row">
          <div className="left">Region</div>
          <div className="right">{data.region}</div>
        </div>
        <div className="row">
          <div className="left">Sub-region</div>
          <div className="right">{data.subregion}</div>
        </div>
        <div className="row">
          <div className="left">Total Area</div>
          <div className="right">{data.area}m&sup2;</div>
        </div>
        <div className="row">
          <div className="left">Population</div>
          <div className="right">{data.population}</div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
