import React from "react";

export default class WeatherInformation extends React.Component {
  render() {
    let {
      city,
      latLong,
      currentTemp,
      high,
      low,
      pressure,
      humidity,
      windSpeed,
      history,
      icon
    } = this.props;
    if (history.length === 0) {
      return (
        <div>
          <div className="card border-dark mb-3">
            <div className="card-header" style={{ fontWeight: "bold" }}>
              Weather
            </div>
            <div
              className="card-body text-center"
              style={{
                fontWeight: "bold",
                backgroundColor: "#a8e8f1",
                color: "#0e5059"
              }}
            >
              Click or enter a city above!
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card border-dark mb-3">
            <div className="card-header" style={{ fontWeight: "bold" }}>
              Weather
            </div>
            <div className="card-body" style={{ backgroundColor: "#a8e8f1" }}>
              <div className="text-center">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                ></img>
                <h1>{city}</h1>
                <div>
                  {`
                  Lat/Long: ${latLong[0]}, ${latLong[1]}`}
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Temperature (F)
                </div>
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Pressure
                </div>
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Humidity
                </div>
              </div>
              <div className="row text-center">
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {currentTemp}
                </h4>
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {pressure}
                </h4>
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {humidity}%
                </h4>
              </div>
              <br />
              <div className="row text-center">
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Lowest Temperature (F)
                </div>
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Highest Temperature (F)
                </div>
                <div className="col-sm-4" style={{ fontWeight: "bold" }}>
                  Wind Speed
                </div>
              </div>
              <div className="row text-center">
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {low}
                </h4>
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {high}
                </h4>
                <h4
                  className="col-sm-4"
                  style={{ color: "#198b9b", fontWeight: "bold" }}
                >
                  {windSpeed}mph
                </h4>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
