import React from "react";
import "./searchResultsList.css";
import { SearchResult } from "./searchResult";
import { render } from "react-dom";
//Here we take the list of results from the searchBar and create a search result for each of the movies or display the no results message if there are none.
export var SearchResultsList = function SearchResultsList(_ref) {
  var results = _ref.results;

  if (results == "Sorry, we didn't get any results. Try again.") {
    return React.createElement(
      "div",
      { classname: "results-list" },
      React.createElement(SearchResult, { result: results, key: 0 })
    );
  } else {
    return React.createElement(
      "div",
      { className: "results-list" },
      results.map(function (result, id) {
        return React.createElement(SearchResult, { result: result.title, key: id });
      })
    );
  }
};