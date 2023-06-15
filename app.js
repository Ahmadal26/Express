const express = require("express");
const products = require("./data");

const PORT = 8000;

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});
// console.log(products);
app.listen(PORT, () => {
  console.log(`Server is working on port :${PORT}`);
});
