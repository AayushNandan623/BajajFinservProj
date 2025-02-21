import { useState } from "react";
import InputForm from "./Components/InputForm";
import FilterDropdown from "./Components/FilterDropdown";
import FilteredResponse from "./Components/FilteredResponse";
import "./App.css";

const App = () => {
  const [jsonData, setJsonData] = useState("");
  const [filteredData, setFilteredData] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const response = await fetch(
        "https://bajajfinservprojaayushnandan22bcs10282.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: parsedData.data }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilteredData(data);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Invalid JSON format or server error.");
    }
  };

  return (
    <div className="App">
      <h1>Multi Filter App</h1>
      <InputForm
        jsonData={jsonData}
        setJsonData={setJsonData}
        onSubmit={handleSubmit}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <FilterDropdown
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <FilteredResponse
        filteredData={filteredData}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default App;
