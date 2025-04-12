const CountryDetails = ({ country }) => {
  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <p>Coordinates: {country.latlng.join(', ')}</p>
      <p>Timezones: {country.timezones.join(', ')}</p>
      <p>Currency: {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
      <p>Languages: {Object.values(country.languages || {}).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
