const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
    }  
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
