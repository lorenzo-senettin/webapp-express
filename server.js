require("dotenv").config();
const express = require("express");
const db = require("./data/db");

const app = express();
app.use(express.json());

db.getConnection((err, conn) => {
  if (err) console.error("DB connection error:", err);
  else {
    console.log("DB connected");
    conn.release();
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
