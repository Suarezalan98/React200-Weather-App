import axios from "axios";

export function getWeather(location) {
  return {
    type: "GET_WEATHER_FROM_LOCATION",
    payload: axios.get(`/search/${location}`)
  };
}

export function searchCity(city) {
  return {
    type: "SEARCH_CITY",
    payload: { city }
  };
}
