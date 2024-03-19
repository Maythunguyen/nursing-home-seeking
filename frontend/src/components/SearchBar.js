import React, { useState, useEffect } from "react";
import "../style.css";
import { FiSearch } from "react-icons/fi";

const endpoint = 'http://localhost:8000/nursing-homes';
const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [nursingHomes, setNursingHomes] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setNursingHomes(data));
    }, []);

    const handleSearch = (currentQuery) => {
        console.log("Searching for:", currentQuery);
        setShowSuggestions(false);
    
        // Convert the current query and data to lowercase for case-insensitive comparison
        const lowerCaseQuery = currentQuery.toLowerCase();
    
        const matches = nursingHomes.filter(home => {
            // Combine all relevant fields into a single string for each home
            const homeDataString = `${home.name}, ${home.address_line_1}, ${home.suburb}, ${home.state}, ${home.post_code}`.toLowerCase();
            // Check if the combined string includes the query
            return homeDataString.includes(lowerCaseQuery);
        });
    
        console.log("Matches found:", matches);
        setHasSearched(true);
        setSearchResults(matches);
        
    };

    const handleInputChange =(e) => {
        const { value } = e.target;
        setQuery(value);
        setShowSuggestions(true);
        if(value.length > 0) {
            const regex = new RegExp(value, 'gi');
            const matches = nursingHomes.filter(home => home.address_line_1.match(regex) || home.suburb.match(regex) || home.state.match(regex));
            setSuggestions(matches)
        } else {
            setSuggestions([]);
        }
    }


    return (
        <div className="search-container">
            <h1 className="search-title">Find your own nearby <br/>convenient Nursing Home</h1>
            
            <div className="search_bar">
                <div className="row">
                    <input 
                        className="search_input" 
                        type="text" 
                        placeholder="City or State"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button className="search_button" onClick={() => handleSearch(query)}><FiSearch size={24}/></button>
                </div>
                {showSuggestions && (
                    <ul className="suggestions">
                    {suggestions.map((home, index) => (
                        <li key={index} onClick={() => {
                            const selectedQuery = `${home.name}, ${home.address_line_1}, ${home.suburb}, ${home.state}, ${home.post_code}`;
                            setQuery(selectedQuery);
                            setShowSuggestions(false)
                            handleSearch(selectedQuery)
                        }}>
                            {home.name}, {home.address_line_1}, {home.suburb}, {home.state}, {home.post_code}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            <div className="results">           
                <ul>
                {hasSearched && searchResults.length > 0 ? (
                        searchResults.map((home, index) => (
                            <li key={index} className="card-result">
                                <div className="card-content">
                                    <div className="card-title">{home.name}</div>
                                    <div className="card-info"> {home.address_line_1}, {home.suburb}, {home.state}, {home.post_code}</div>
                                </div>
                            </li>
                        ))
                ) : null}
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;
