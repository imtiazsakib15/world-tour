import { useState } from "react";
import PropTypes from "prop-types";
import "./Country.css";
const Country = ({ country, handleShowVisited }) => {
  const [visited, setVisited] = useState(false);

  const { name, flags, region, area, maps } = country;

  return (
    <div className="country">
      <img src={flags?.png} alt={flags?.alt} />
      <h2>{name?.common}</h2>
      <p>Region: {region}</p>
      <p>Area: {area}SqKm</p>
      <a href={maps?.googleMaps}>Location on Google Map</a>
      <br />
      <br />
      <button
        onClick={() => {
          setVisited(!visited);
          handleShowVisited(name?.common, flags?.png, flags?.alt);
        }}
      >
        {visited ? "Not Visited" : "Visited"}
      </button>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
  handleShowVisited: PropTypes.func.isRequired,
};

export default Country;
