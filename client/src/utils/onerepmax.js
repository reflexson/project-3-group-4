function calculateOneRepMax(weight, reps) {
    return weight * (1 + 0.0333 * reps);
  }
  
  module.exports = {
    calculateOneRepMax,
  };

// const { calculateOneRepMax } = require('./path_to_util_folder/onerepmax');

// const weight = 100;  // e.g., the user lifts 100
// const reps = 10;     // e.g., the user does 10 reps

// const oneRepMax = calculateOneRepMax(weight, reps);
// console.log(`The calculated one-rep max is: ${oneRepMax} lbs or kg`);