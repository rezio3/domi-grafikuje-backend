const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

// przykładowe dane
const people = [
  { id: 1, name: "Jan", age: 25 },
  { id: 2, name: "Anna", age: 30 },
  { id: 3, name: "Krzysztof", age: 40 },
];

// endpoint API
app.get("/api/people", (req, res) => {
  res.json(people);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
