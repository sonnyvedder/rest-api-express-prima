const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to expres api");
});

const productController = require("./product/product.controller");

app.use("/api/products", productController);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
