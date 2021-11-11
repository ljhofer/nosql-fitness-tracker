const path = require('path');
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

const opts = { useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false  
}; 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", opts);


// Renders the /exercise page to add a new workout
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});


// Renders the /stats page to see workout/
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

// Recalls the last workout
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});


// Creates a new workout document
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});


// Adds exercises to most recent workout
app.put("/api/workouts/:id", (req, res) => { 
  db.Workout.findOneAndUpdate( 
    { _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});


// Displays the last 7 workouts to the stats page
app.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.status(400).json(err);
  });
})


// TODO: Get route to view combined weight of exercises on stats page
// TODO: Get route to view total duration of each workout from the past 7 workouts oon stats page














app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  