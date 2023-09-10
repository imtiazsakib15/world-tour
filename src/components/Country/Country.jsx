import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, region, area, maps } = country;
  return (
    <div className="country">
      <img src={flags?.png} alt={flags.alt} />
      <h2>{name?.common}</h2>
      <div>
        <p>Region: {region}</p>
        <p>Area: {area}SqKm</p>
        <a href={maps.googleMaps}>Location on Google Map</a>
      </div>
    </div>
  );
};

export default Country;
