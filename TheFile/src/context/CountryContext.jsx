import React, { createContext, useState, useEffect } from "react";

export const CountryContext = createContext();

const normalizeCountry = (country) => ({
    ...country,
    name: { common: country.name },
    cca3: country.alpha3Code,
    flags: country.flags,
    capital: country.capital ? [country.capital] : [],
    currencies: Object.fromEntries((country.currencies || []).map((currency) => [
        currency.code,
        { name: currency.name, symbol: currency.symbol },
    ])),
    languages: Object.fromEntries((country.languages || []).map((language) => [
        language.iso639_2 || language.iso639_1,
        language.name,
    ])),
} );

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://countries.dev/countries?limit=250");
                if (!response.ok) throw new Error(`Country request failed (${response.status})`);
                const data = await response.json();
                setCountries(Array.isArray(data) ? data.map(normalizeCountry) : []);
            } catch (error) {
                console.error("Error fetching country data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries, loading }}>
            {children}
        </CountryContext.Provider>
    );
};
