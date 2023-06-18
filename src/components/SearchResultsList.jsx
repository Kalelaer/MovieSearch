import React from "react";
import "./searchResultsList.css";
import { SearchResult } from "./searchResult";
import { render } from "react-dom";

export const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
          {results.map((result, id) => {
            return <SearchResult result={result.title} key={id} />;
          })}
        </div>
      );
    };