const Country = ({country}) => {
  const { name, flags } = country;
  return (
    <div>
      <img src={flags?.png} alt={flags.alt} />
      {/* <h3>{name?.common}</h3> */}
    </div>
  );
};

export default Country;
