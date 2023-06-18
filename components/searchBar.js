import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

//Here I set up the element that is going to contain the other pieces.
export var SearchBar = function SearchBar(_ref) {
    var setResults = _ref.setResults;

    var _useState = useState(""),
        _useState2 = _slicedToArray(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1];

    var options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZhNzkzYzRkYTlhNDgyMDFjNGJjOGI0MmFjZGQ1MiIsInN1YiI6IjY0OGM2YWI5NTU5ZDIyMDBlMjA1NjBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttS71_a-IC-jcPDAYsN-EsQVd1dZP3YCbbvFEAOyMMk"
        }
    };
    //This function is what will call our API. It takes our search value, calls for it, waits for the api to respond,
    //then it takes the response and turns it into a json. I take the json and look for the parts I want before sending them to the results list.
    var fetchMovieData = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(value) {
            var returnData, response;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(value == "")) {
                                _context.next = 4;
                                break;
                            }

                            setResults("Sorry, we didn't get any results. Try again.");
                            _context.next = 14;
                            break;

                        case 4:
                            if (!(value != "")) {
                                _context.next = 14;
                                break;
                            }

                            returnData = void 0;
                            response = void 0;
                            _context.next = 9;
                            return fetch("https://api.themoviedb.org/3/search/movie?query=" + value, options);

                        case 9:
                            response = _context.sent;
                            _context.next = 12;
                            return response.json();

                        case 12:
                            returnData = _context.sent;

                            if (returnData.results.length > 0) {
                                setResults(returnData.results);
                            } else {
                                setResults("Sorry, we didn't get any results. Try again.");
                            }

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function fetchMovieData(_x) {
            return _ref2.apply(this, arguments);
        };
    }();
    //This will handle changes to the searchbar and sending those to the above function.
    var handleChange = function handleChange(value) {
        setInput(value);
        fetchMovieData(value);
    };

    return React.createElement(
        "div",
        { className: "input-Wrapper" },
        React.createElement(FaSearch, { id: "search-icon" }),
        React.createElement("input", {
            placeholder: "Movie title here..."
            //Here I set up the values entered into the box to be sent to the proper functions
            , value: input,
            onChange: function onChange(e) {
                return handleChange(e.target.value);
            }
        })
    );
};