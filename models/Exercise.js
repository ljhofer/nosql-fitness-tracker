const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: "Please choose a type for your exercise."
  },
  name: {
    type: String, 
    trim: true, 
    required: "Please enter a name for your exercise."
  },
  duration: {
    type: Number
  }, 
  distance: {
    type: Number
  }, 
  weight: {
    type: Number    
  },
  reps: {
      type: Number
  }, 
  sets: {
    type: Number
  } 
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;