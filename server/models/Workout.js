const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    exercises: []
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;