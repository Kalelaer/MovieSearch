var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export var SearchBar = function SearchBar(_ref) {
  var setResults = _ref.setResults;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var fetchData = function fetchData(value) {
    fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
      return response.json();
    }).then(function (json) {
      var results = json.filter(function (user) {
        return value && user && user.name && user.name.toLowerCase().includes(value);
      });
      setResults(results);
    });
  };

  var handleChange = function handleChange(value) {
    setInput(value);
    fetchData(value);
  };

  return React.createElement(
    "div",
    { className: "input-wrapper" },
    React.createElement(FaSearch, { id: "search-icon" }),
    React.createElement("input", {
      placeholder: "Type to search...",
      value: input,
      onChange: function onChange(e) {
        return handleChange(e.target.value);
      }
    })
  );
};