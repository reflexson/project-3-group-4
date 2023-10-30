const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    date: { 
        type: Date,
        default: Date.now
    },
    title: { 
        type: String,
        required: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
