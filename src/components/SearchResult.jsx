import React from "react";
import "./searchResult.css"

export const searchResult = ({ result }) => {
    return (
        
      <div
        className="search-result"
        >
          {result}
      </div>
      
    );
  };