import { useState } from 'react';
import './App.css';
//This is where our different bits of react components are imported.
import { searchBar } from './components/searchBar';
import { searchResultsList } from './components/searchResultsList';

function App() {

  const [results, setResults] = useState([]);
//THis just sets up the module to have a division with the searchbar and results.
  return (
    <div className='App'>
      <div className='searchBarContainer'>
        
        <searchBar setResults={setResults}/>
        <searchResultsList results={results} />
      </div>
    </div>
  )
}

export default App
