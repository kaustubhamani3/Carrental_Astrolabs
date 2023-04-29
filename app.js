const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @TODO: Change the origin to the frontend URL
app.use(cors({origin: "*",}));

// Connects to the Mongo DB
require("./db");

// routes
app.use("/customer", require("./api/customers"));
app.use("/vehicle", require("./api/vehicles"));
app.use("/rental", require("./api/rentals"));

module.exports = app;
