import { combineReducers } from "redux";
import SearchBarReducer from "./components/SearchBar/SearchBarReducer";

const rootReducer = combineReducers({
  searchBar: SearchBarReducer
});

export default rootReducer;
