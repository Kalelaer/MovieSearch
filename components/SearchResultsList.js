import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export var SearchResultsList = function SearchResultsList(_ref) {
  var results = _ref.results;

  return React.createElement(
    "div",
    { className: "results-list" },
    results.map(function (result, id) {
      return React.createElement(SearchResult, { result: result.name, key: id });
    })
  );
};