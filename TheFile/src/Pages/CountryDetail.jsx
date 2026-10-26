import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";
import "../styles/CountryDetail.css";

const CountryDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate(); 
    const { countries, loading } = useContext(CountryContext);
    const country = countries.find((item) => item.name.common.toLowerCase() === (name || "").toLowerCase());

    if (!name) {
        return (
            <div className="no-country-selected">
                <h2>⚠ No Country Selected</h2>
                <p>You must search and select a country first.</p>
                <button onClick={() => navigate("/search")} className="back-button">
                ← Go to Search
                </button>
            </div>
        );
    }

    if (loading) {
        return <p className="loading">Loading country details...</p>;
    }

    if (!country) {
        return <p className="error-message">Country not found.</p>;
    }

    return (
        <div className="country-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">← Back</button>
            <div className="country-detail">
                <h1>{country.name.common}</h1>
                <img src={country.flags.svg} alt={country.name.common} className="flag" />
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
                <p><strong>Language:</strong> {Object.values(country.languages || {}).join(", ")}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(country.name.common)}`} target="_blank" rel="noopener noreferrer" className="map-link">
                    View on Google Maps
                </a>
            </div>
        </div>
    );
};

export default CountryDetail;
