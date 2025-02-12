import express from "express";
const app = express();
const PORT = 3000;

import jsonData from "./data/data.json" assert { type: "json" };

app.get("/json", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(jsonData));
});

app.get("/csv", (req, res) => {
  res.send("csv");
});

app.get("/txt", (req, res) => {
  res.send("txt");
});

app.get("/xml", (req, res) => {
  res.send("xml");
});

app.get("/yaml", (req, res) => {
  res.send("yaml");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
