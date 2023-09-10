import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <p>Total Country = {countries.length}</p>
      {countries.map((country) => (
        <Country country={country} key={country.cca3} />
      ))}
    </>
  );
};

export default Countries;
