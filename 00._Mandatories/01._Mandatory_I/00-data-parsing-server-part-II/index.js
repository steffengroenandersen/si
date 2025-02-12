import express from "express";
const app = express();
const PORT = 3000;

import data from "./data/data.json" assert { type: "json" };

app.get("/json", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
