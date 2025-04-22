const express = require("express");
require("dotenv").config();
const db = require("./data/db");
const movieRouter = require("./routers/movieRouter");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use("/api", movieRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
