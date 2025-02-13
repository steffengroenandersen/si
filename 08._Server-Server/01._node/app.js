import express from "express";
const app = express();

app.get("/expressData", (req, res) => {
  res.send({ data: "Data from express." });
});

app.get("/requestFastAPIData", async (req, res) => {
  console.log("/requestFastAPIData");

  const response = await fetch("http://127.0.0.1:8000/me");
  const fastAPIData = await response.json();

  res.send({ data: fastAPIData.data });
});

app.get("/me", (req, res) => {
  res.send({ data: { name: "Steffen", age: "33" } });
});

app.get("/names/:name", (req, res) => {
  console.log(req.params.name);
  res.send({ data: req.params.name });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
