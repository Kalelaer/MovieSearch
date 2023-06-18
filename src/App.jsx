import { useState } from 'react';
import './App.css';
//This is where our different bits of react components are imported.
import { SearchBar } from './components/searchBar';
import { SearchResultsList } from './components/searchResultsList';

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <div className='searchBarContainer'>
        
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default App
