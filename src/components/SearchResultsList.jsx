import React from "react";
import "./searchResultsList.css";
import { SearchResult } from "./searchResult";
import { render } from "react-dom";

export const SearchResultsList = ({ results }) => {
  if (results == "Sorry, we didn't get any results. Try again."){
    return(
      <div classname="results-list">
        {
          <SearchResult result={results} key={0}/>
        }
      </div>
    )
  }else{
    return (
      <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult result={result.title} key={id} />;
        })}
      </div>
    );
  }
    
};