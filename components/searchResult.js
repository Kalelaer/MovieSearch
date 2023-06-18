import React from "react";
import "./searchResult.css";

export var SearchResult = function SearchResult(_ref) {
  var result = _ref.result;

  return React.createElement(
    "div",
    {
      className: "search-result"
    },
    result
  );
};