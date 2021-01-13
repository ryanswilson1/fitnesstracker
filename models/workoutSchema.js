
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [],
    day: Number,
    totalDuration: {
        type: Number,
        default: 0
    }
});


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;