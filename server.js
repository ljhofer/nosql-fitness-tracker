const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// TODO: Add in the other three things Gary 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb", { useNewUrlParser: true });


// TODO: Routes go here


// TODO: Put route to add exercised to most recent workout


// TODO: Post route to create a new workout with exercises


// TODO: Get route to view combined weight of exercises on stats page


// TODO: Get route to view total durating of each workout from the past 7 workouts oon stats page















app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  