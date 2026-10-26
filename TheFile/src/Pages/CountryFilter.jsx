import React, { useContext, useMemo, useState } from "react";
import { CountryContext } from "../context/CountryContext";
import "../styles/CountryFilter.css";

const CountryFilter = () => {
    const { countries, loading } = useContext(CountryContext);
    const [region, setRegion] = useState("");
    const [language, setLanguage] = useState("");
    const [independent, setIndependent] = useState(false);
    const filteredCountries = useMemo(() => countries.filter((country) => {
        if (region && country.region?.toLowerCase() !== region.toLowerCase()) return false;
        if (language && !Object.values(country.languages || {}).some((item) => item.toLowerCase().includes(language.toLowerCase()))) return false;
        if (independent && !country.independent) return false;
        return true;
    }), [countries, region, language, independent]);

    return (
        <div className="filter-page">
            <h1 className="filter-title">Filter Countries</h1>

            <div className="filter-options">

                <div className="custom-dropdown">
                    <select onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Select Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>

                <div className="custom-dropdown">
                    <select onChange={(e) => setLanguage(e.target.value)}>
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </div>

                <div className="switch-container">
                    <label className="switch-label">Independent Country</label>
                    <label className="switch">
                        <input type="checkbox" checked={independent} onChange={() => setIndependent(!independent)} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <div className="country-list">
                {loading ? <p>Loading countries...</p> : filteredCountries.map((country) => (
                    <div key={country.cca3} className="country-card">
                        <img src={country.flags?.png} alt={country.name.common} className="flag" />
                        <h3>{country.name.common}</h3>
                        <p>{country.region}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryFilter;
