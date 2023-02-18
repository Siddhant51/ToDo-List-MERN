const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/TodoRoute");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.port || 5000;

app.use(router);

app.listen(PORT, () => console.log("Lintening on port..."));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));
