import { connect } from "react-redux";
import SearchHistory from "./SearchHistory";

function mapStoreToProps(store) {
  return {
    historyItem: store.searchBar.history
  };
}

export default connect(mapStoreToProps)(SearchHistory);
