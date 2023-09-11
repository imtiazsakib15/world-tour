import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleShowVisited = (name, flag, alt) => {
    // (visitedCountries.find(country => country.name === name))
    const allVisitedCountry = [...visitedCountries, { name, flag, alt }];
    setVisitedCountries(allVisitedCountry);
  };

  return (
    <>
      <p>Total Country = {countries.length}</p>
      <div>
        <h5>My Visited Countries:</h5>
        <div className="visited-country-container">
          {visitedCountries.map((country, index) => (
            <div key={index}>
              <img
                className="visited-country-img"
                src={country?.flag}
                alt={country?.alt}
              />
              <h5>{country.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleShowVisited={handleShowVisited}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
