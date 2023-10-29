const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    // date: {
    //     type: Date,
    //     required: true
    // },
    name: {type:String},
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise',
            required: true
        }
    ]
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
