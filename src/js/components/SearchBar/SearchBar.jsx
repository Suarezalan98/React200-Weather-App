import React from "react";
import { getWeather, searchCity } from "./SearchBarActions";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handlePresetCity = this.handlePresetCity.bind(this);
    this.handleCitySearch = this.handleCitySearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handlePresetCity(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
    // console.log(value);
  }

  handleCitySearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  }

  handleSearchButton() {
    const { dispatch, city } = this.props;
    console.log(city, "city");
    dispatch(getWeather(city));
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <button
          className="btn btn-light btn-outline-dark "
          type="button"
          style={{ fontWeight: "bold" }}
          value="San Diego"
          onClick={this.handlePresetCity}
        >
          San Diego
        </button>
        <button
          className="btn btn-light btn-outline-dark"
          type="button"
          style={{ fontWeight: "bold" }}
          value="New York"
          onClick={this.handlePresetCity}
        >
          New York
        </button>
        <button
          className="btn btn-light btn-outline-dark"
          type="button"
          style={{ fontWeight: "bold" }}
          value="Washington D.C."
          onClick={this.handlePresetCity}
        >
          Washington D.C.
        </button>
        <button
          className="btn btn-light btn-outline-dark"
          type="button"
          style={{ fontWeight: "bold" }}
          value="London"
          onClick={this.handlePresetCity}
        >
          London
        </button>
        <button
          className="btn btn-light btn-outline-dark"
          type="button"
          style={{ fontWeight: "bold" }}
          value="Tokyo"
          onClick={this.handlePresetCity}
        >
          Tokyo
        </button>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name of City"
            aria-label="Name of City"
            aria-describedby="basic-addon2"
            value={city}
            onChange={this.handleCitySearch}
          />
          <div className="input-group-append">
            <button
              className="btn btn-dark btn-outline-light"
              type="button"
              onClick={this.handleSearchButton}
            >
              Search Here
            </button>
          </div>
        </div>
      </div>
    );
  }
}
