const FilterDropdown = ({ onPopulationFilter }) => {
  return (
    <div>
      <label>Filter by Population: </label>
      <select onChange={(e) => onPopulationFilter(e.target.value)}>
        <option value="">All</option>
        <option value="small">Less than 10M</option>
        <option value="medium">10M - 100M</option>
        <option value="large">Over 100M</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
