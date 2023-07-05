const express = require("express");
const app = express();
const PORT = 8000;
const rappers = {
  "21 savage": {
    age: 29,
    birthname: "Sheyaa",
    birthlocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthname: "Chancelor",
    birthlocation: "Chicago, Illinios",
  },
  dylan: {
    age: 29,
    birthname: "Dylan",
    birthlocation: "Chicago, Illinios",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  console.log(rappersName);
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["dylan"]);
  }
});
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
