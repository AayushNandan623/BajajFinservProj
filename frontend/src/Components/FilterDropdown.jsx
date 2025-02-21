import styles from "../styles/FilterDropdown.module.css";

const FilterDropdown = ({ selectedFilters, setSelectedFilters }) => {
  const filterOptions = ["Alphabets", "Numbers", "Highest Alphabet"];

  const handleFilterChange = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  return (
    <div className={styles.dropdown}>
      <h3>Multi Filter</h3>
      {filterOptions.map((option, index) => (
        <label key={index} className={styles.option}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(option)}
            onChange={() => handleFilterChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default FilterDropdown;
