import React from "react";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import WeatherInformation from "./components/WeatherInformation";

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="text-center jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4" style={{ fontWeight: "bold" }}>
              Weather Application
            </h1>
            <p className="lead">Always know when you'll need an umbrella!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <SearchBar />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-7">
            <WeatherInformation />
          </div>
          <div className="col-sm-5">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
