import axios from "axios";

/**
 * Helper to make API request to REST Countries
 * https://restcountries.eu/
 */

var io = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
  timeout: 4000,
});

const API = {
  /**
   * Search by country name. It can be the native name or partial name
   * https://restcountries.eu/rest/v2/name/{name}
   * @param {string} query - The search term
   * @return {object[]} A list with all the matches
   */
  searchCountry(query) {
    // We need at least 2 characters to make the request
    if (query.length < 2) {
      return Promise.resolve([]);
    }

    const url = `name/${query}`;

    return io
      .get(url, { limit: 1000 })
      .then(response => response.data)
      .catch(error => []); // Swallow the error
  },

  /**
   * Fetch all available countries. Useful to show them in a
   * list or selection box ;)
   * Each object in the list is structured as follows:
   * {
   *  name,       // Country name in english
   *  nativeName, // Country native name in its language
   *  flag,       // Url to flag image
   *  alpha3Code  // 3-letter country code
   * }
   * @return {object[]} All available countries
   */
  getAvailableCountries() {
    const url = `all?fields=name;nativeName;flag;alpha3Code`;

    return io
      .get(url)
      .then(response => response.data)
      .catch(error => []);
  },

  /**
   * Fetch all country data
   * @param {string} alpha3Code
   * @return {object|null} The data
   */
  getCountryInfo(alpha3Code) {
    const url = `alpha/${alpha3Code}`;

    return io
      .get(url)
      .then(response => response.data)
      .catch(error => null);
  },
};

export default API;
