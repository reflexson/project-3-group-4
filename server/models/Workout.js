const { Schema, model } = require('mongoose');
const Exercise = require('./Exercise');

const workoutSchema = new Schema({
    // date: {
    //     type: Date,
    //     required: true
    // },
    name: {type:String},
    exercises: [Exercise.schema]
    
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
