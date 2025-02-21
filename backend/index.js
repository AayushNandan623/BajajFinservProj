import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.use(
  cors({
    origin: "https://bajajfinservprojaayushnandan22bcs10282fr.onrender.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());


import bfhlRoutes from "./routes/bfhl.js";
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
