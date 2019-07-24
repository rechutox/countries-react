import React from "react";
import { debounce } from "lodash";
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";
import Modal from "./Modal";
import Notification from "./Notification";
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
    try {
      const searchResults = await api.searchCountry(query);
      this.setState({
        ...this.state,
        searchResults,
        hasError: false,
      });
    } catch (error) {
      this._showError(error);
    }
  }

  async getCountryInfo(callback = () => {}) {
    const query = this.state.selectedCountry;
    if (query.length === 0) return;
    try {
      const countryData = await api.getCountryInfo(query);

      this.setState(
        {
          ...this.state,
          countryData,
          hasError: false,
        },
        callback,
      );
    } catch (error) {
      this._showError(error);
    }
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
    this.setState(
      {
        searchQuery: e.target.value,
      },
      this.debouncedSearchCountries,
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
      },
    );
  };

  render() {
    const { searchQuery, searchResults, countryData, modalOpen } = this.state;

    const notification = this.state.hasError && (
      <Notification type="error" message={this.state.errorMessage} />
    );

    return (
      <div className={"App" + (modalOpen ? " has-modal" : "")}>
        <div className="wrapper">
          <h1 className="title">..:: Countries ::..</h1>

          <input
            spellCheck="false"
            autoComplete="false"
            className="searchbar"
            type="search"
            placeholder="Type a country name..."
            onChange={this._onInputChange}
            value={searchQuery}
          />

          {notification}

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
