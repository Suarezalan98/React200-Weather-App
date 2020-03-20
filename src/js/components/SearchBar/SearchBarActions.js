import axios from "axios";

export function getWeather(location) {
  return {
    type: "GET_WEATHER_FROM_LOCATION",
    payload: axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cb0db5494d1b8eeb24a4924ed7d25d2f&units=imperial`
    )
  };
}

export function searchCity(city) {
  return {
    type: "SEARCH_CITY",
    payload: { city }
  };
}
