import styles from "../styles/InputForm.module.css";

const InputForm = ({ jsonData, setJsonData, onSubmit }) => {
  const handleChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonData);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        alert(
          'JSON must have a \'data\' array, e.g. {"data": ["A", "1", "B"]}'
        );
        return;
      }
      onSubmit();
    } catch (error) {
      alert("Invalid JSON format. Please enter valid JSON.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={jsonData}
        onChange={handleChange}
        placeholder='Enter JSON e.g. {"data":["A","1","B"]}'
        className={styles.textarea}
      />
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default InputForm;
