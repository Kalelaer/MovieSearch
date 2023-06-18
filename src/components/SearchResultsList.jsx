import React from "react";
import "./searchResultsList.css";
import { searchResult } from "./searchResult";
import { render } from "react-dom";
//Here we take the list of results from the searchBar and create a search result for each of the movies or display the no results message if there are none.
export const searchResultsList = ({ results }) => {
  if (results == "Sorry, we didn't get any results. Try again."){
    return(
      <div classname="results-list">
        {
          <searchResult result={results} key={0}/>
        }
      </div>
    )
  }else{
    return (
      <div className="results-list">
        {results.map((result, id) => {
          return <searchResult result={result.title} key={id} />;
        })}
      </div>
    );
  }
    
};