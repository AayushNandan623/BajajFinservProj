const isNumeric = (value) => {
  return !isNaN(value);
};

export const postBfhl = (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter((item) => isNumeric(item));
    const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

    const highestAlphabet =
      alphabets.length > 0
        ? [
            alphabets.sort((a, b) =>
              b.toLowerCase().localeCompare(a.toLowerCase())
            )[0],
          ]
        : [];

    const response = {
      is_success: true,
      user_id: "Aayush_Nandan_06022003",
      email: "aayushnandan623@gmail.com",
      roll_number: "22BCS10282",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, message: "Server Error" });
  }
};

export const getBfhl = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};
