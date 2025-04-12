import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from '../components/CountryDetails';
import Flag from '../components/Flag';
import Borders from '../components/Borders';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');

  const fetchCountry = (name) => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => {
        setCountry(res.data[0]);
        setError('');
      })
      .catch(() => {
        setCountry(null);
        setError('Country not found');
      });
  };

  const filterByPopulation = (size) => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        let filtered = res.data;
        if (size === 'small') filtered = filtered.filter(c => c.population < 10_000_000);
        if (size === 'medium') filtered = filtered.filter(c => c.population >= 10_000_000 && c.population <= 100_000_000);
        if (size === 'large') filtered = filtered.filter(c => c.population > 100_000_000);
        setCountry(filtered[0]);
        setError('');
      })
      .catch(() => {
        setCountry(null);
        setError('No countries found for this filter');
      });
  };

  const fetchByCode = (code) => {
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => {
        setCountry(res.data[0]);
        setError('');
      })
      .catch(() => setError('Border country not found'));
  };

  useEffect(() => {
    fetchCountry('Afghanistan');
  }, []);

  return (
    <div className="home-container">
      <div className="controls">
        <SearchBar onSearch={fetchCountry} />
        <FilterDropdown onPopulationFilter={filterByPopulation} />
      </div>

      {error && <p className="error-message">{error}</p>}

      {country && (
        <div className="country-card">
          <div className="flag-container">
            <Flag url={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="details-container">
            <CountryDetails country={country} />
            <Borders borders={country.borders} onBorderClick={fetchByCode} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
