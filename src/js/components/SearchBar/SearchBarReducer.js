const defaultState = {
  city: "",
  high: "",
  low: "",
  currentTemp: "",
  pressure: "",
  humidity: "",
  windSpeed: "",
  latLong: [],
  history: [],
  icon: "",
  id: 0
};

export default function SearchBarReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH_CITY": {
      return {
        ...state,
        city: payload.city
      };
    }

    case "GET_WEATHER_FROM_LOCATION_FULFILLED": {
      return {
        ...state,
        city: action.payload.data.name,
        high: action.payload.data.main.temp_max,
        low: action.payload.data.main.temp_min,
        currentTemp: action.payload.data.main.temp,
        pressure: action.payload.data.main.pressure,
        humidity: action.payload.data.main.humidity,
        windSpeed: action.payload.data.wind.speed,
        latLong: [action.payload.data.coord.lat, action.payload.data.coord.lon],
        icon: action.payload.data.weather[0].icon,
        history: [
          ...state.history,
          [
            payload.data["name"],
            new Date().toLocaleString("en-US", {
              timeZone: "America/Los_Angeles"
            })
          ]
        ]
      };
    }

    case "GET_WEATHER_FROM_LOCATION_REJECTED": {
      return {
        ...state
      };
    }

    case "GET_WEATHER_FROM_LOCATION_PENDING": {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
