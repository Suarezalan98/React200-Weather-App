import { connect } from "react-redux";
import SearchBar from "./SearchBar";

function mapStoreToProps(store) {
  return {
    city: store.searchBar.city
  };
}

export default connect(mapStoreToProps)(SearchBar);
