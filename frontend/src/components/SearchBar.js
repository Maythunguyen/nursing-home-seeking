import React, { useState, useEffect } from "react";
import "../style.css";
import { FiSearch } from "react-icons/fi";
import axios from 'axios';

const endpoint = 'http://localhost:8000/nursing-homes';
const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [nursingHomes, setNursingHomes] = useState([]);
    const [filteredHomes, setFilteredHomes] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setNursingHomes(data));
    }, []);

    useEffect(() => {
        if(query.length > 0) {
            const regex = new RegExp(query, 'gi');
            const matches = nursingHomes.filter(home => home.address_line_1.match(regex) || home.suburb.match(regex) || home.state.match(regex));
            setFilteredHomes(matches)
        } else {
            setFilteredHomes([])
        }
    }, [query, nursingHomes]);


    return (
        <div className="search-container">
            <h1 className="search-title">Find your own nearby convenient Nursing Home</h1>
            
            <div className="search_bar">
                <div className="row">
                    <input 
                        className="search_input" 
                        type="text" 
                        placeholder="City or State"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="search_button"><FiSearch size={24}/></button>
                </div>
            </div>
            <div className="results">
                <ul>
                {filteredHomes.length > 0 ? (
                        filteredHomes.map((home, index) => (
                            <li key={index}>
                                <span className="name">{home.name}, {home.address_line_1}, {home.suburb}, {home.state}</span>

                            </li>
                        ))
                ) : (
                    <>
                        <li className="result">Filter for Provider, City, Suburb, State</li>
                    </>
                )};
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;
