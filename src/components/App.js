import React from "react";
import { debounce } from "lodash";
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";
import Modal from "./Modal";
import api from "../api/countries";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResults: [],
      selectedCountry: "",
      countryData: {},
      hasError: false,
      errorMessage: "",
      modalOpen: false,
    };
    this.debouncedSearchCountries = debounce(this.searchCountries);
  }

  async searchCountries() {
    const query = this.state.searchQuery;
    if (query.length === 0) return;
    const searchResults = await api.searchCountry(query);
    this.setState({
      ...this.state,
      searchResults,
      hasError: false,
    });
  }

  async getCountryInfo(callback = () => {}) {
    const query = this.state.selectedCountry;
    if (query.length === 0) return;
    const countryData = await api.getCountryInfo(query);

    this.setState(
      {
        ...this.state,
        countryData,
        hasError: false,
      },
      callback
    );
  }

  _showError(error) {
    const errorMessage = `
        There was a problem retrieving the data...
        please try again later. (${error})`;
    this.setState({
      ...this.state,
      hasError: true,
      errorMessage,
    });
  }

  _toggleModal = (state = false) => {
    this.setState({
      ...this.state,
      modalOpen: state,
    });
  };

  _onInputChange = e => {
    const value = e.target.value;
    if (!/^[a-zA-Z]*$/.test(value)) return; // Accept only letters
    this.setState(
      {
        searchQuery: value,
      },
      this.debouncedSearchCountries
    );
  };

  _onCountrySelect = country => {
    this.setState(
      {
        ...this.state,
        selectedCountry: country.alpha3Code,
      },
      () => {
        this.getCountryInfo(() => {
          this._toggleModal(true);
        });
      }
    );
  };

  render() {
    const { searchQuery, searchResults, countryData, modalOpen } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="title">~ Countries ~</h1>

          <input
            spellCheck="false"
            autoComplete="false"
            className="searchbar"
            type="search"
            placeholder="Type a country name..."
            onChange={this._onInputChange}
            value={searchQuery}
          />

          <CountryList items={searchResults} onSelect={this._onCountrySelect} />

          <Modal isOpen={modalOpen} onClose={() => this._toggleModal(false)}>
            <CountryInfo data={countryData} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
