import styles from "../styles/FilteredResponse.module.css";

const FilteredResponse = ({ filteredData, selectedFilters }) => {
  return (
    <div className={styles.responseContainer}>
      <h3>Filtered Response</h3>
      {selectedFilters.includes("Numbers") && (
        <p>Numbers: {filteredData.numbers?.join(", ") || "No numbers"}</p>
      )}
      {selectedFilters.includes("Alphabets") && (
        <p>Alphabets: {filteredData.alphabets?.join(", ") || "No alphabets"}</p>
      )}
      {selectedFilters.includes("Highest Alphabet") && (
        <p>
          Highest Alphabet:{" "}
          {filteredData.highest_alphabet?.join(", ") || "None"}
        </p>
      )}
    </div>
  );
};

export default FilteredResponse;
