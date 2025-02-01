const fs = require("node:fs");

fs.readFile("./data/data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const parsedData = JSON.parse(data);
  console.log(parsedData);
});
