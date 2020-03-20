import { connect } from "react-redux";
import WeatherInformation from "./WeatherInformation";

function mapStoreToProps(store) {
  return {
    city: store.searchBar.city,
    latLong: store.searchBar.latLong,
    currentTemp: store.searchBar.currentTemp,
    high: store.searchBar.high,
    low: store.searchBar.low,
    pressure: store.searchBar.pressure,
    humidity: store.searchBar.humidity,
    windSpeed: store.searchBar.windSpeed,
    history: store.searchBar.history,
    icon: store.searchBar.icon
  };
}

export default connect(mapStoreToProps)(WeatherInformation);
