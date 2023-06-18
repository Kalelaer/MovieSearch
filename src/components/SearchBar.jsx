import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./searchBar.css";

//Here I set up the element that is going to contain the other pieces.
export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZhNzkzYzRkYTlhNDgyMDFjNGJjOGI0MmFjZGQ1MiIsInN1YiI6IjY0OGM2YWI5NTU5ZDIyMDBlMjA1NjBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ttS71_a-IC-jcPDAYsN-EsQVd1dZP3YCbbvFEAOyMMk"
    }
};
//This function is what will call our API. It takes our search value, calls for it, waits for the api to respond,
//then it takes the response and turns it into a json.
    const fetchMovieData = async(value) => {
        if(value == ""){
            setResults("Sorry, we didn't get any results. Try again.")
        }else{
            if(value != ""){
                let returnData;
                let response;
                response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + value, options)
                returnData = await response.json();
                if(returnData.results.length > 0){
                    setResults(returnData.results)
                }else{
                    setResults("Sorry, we didn't get any results. Try again.")
                }
                
        }
        }
        
    };
//This will handle changes to the searchbar and sending those to the above function.
const handleChange = (value) => {
    setInput(value);
    fetchMovieData(value);
  };

    return (
        <div className="input-Wrapper">
            <FaSearch id="search-icon" />
            <input 
            placeholder="Movie title here..." 
            //Here I set up the values entered into the box to be sent to the proper functions
            value={input}
            onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};