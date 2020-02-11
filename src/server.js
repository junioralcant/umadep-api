require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const dataBaseConfig = require("./config/database");

isDev = process.env.NODE_ENV != "development";

mongoose.connect(dataBaseConfig.uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3001);
