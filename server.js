const express = require("express");
const db = require("./data/db");
const movieRouter = require("./routers/movieRouter");

const app = express();

app.use(express.json());
app.use("/api", movieRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
