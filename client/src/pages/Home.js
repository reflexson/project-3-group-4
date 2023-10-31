import React from "react";

const styles = {
  heading: {
    background: "#272f32",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

const Home = () => {
  return (
    <div className="col-12 flex-row justify-content-center">
      <div className="col-5 mt-3">
        <img src="/images/gym-pic-1.png" alt="nfg" />
        <img />
        <div style={styles.heading} className="mt-3">
          Transform Your Body, Transform Your Life: Welcome to the New You!
        </div>
        <div style={styles.content}>
          Set off on a fitness adventure of self-discovery. Our app is your
          ticket to becoming a better, healthier, and more confident version of
          yourself. Let the transformation begin!
        </div>
      </div>

      <div className="col-5 ms-4 mt-3">
        <div style={styles.heading} className="">
          Unleash Your Potential: Your Ultimate Workout Companion
        </div>
        <div style={styles.content}>
          Revolutionize your fitness journey with our cutting-edge workout app.
          Tailored workouts with results that speak for themselves.
        </div>
        <img src="/images/gym-pic-2.png" alt="nfgss" className="w-100" />
        <img />
      </div>
      <div className="col-5 ">
        <img src="/images/chart.png" alt="nfg" />
        <img />
        <div style={styles.heading} className="mt-3">
          Your Fitness, Your Rules: Customize Your Path to Greatness
        </div>
        <div style={styles.content}>
          Tailor your fitness experience with our app's customizable workouts.
          Whether you're aiming for strength, endurance, or flexibility, we've
          got your goals covered. Say goodbye to mundane routines. Our app is
          your ticket to efficient, effective workouts. Maximize your time, see
          results faster, and enjoy the journey.
        </div>
      </div>
      <div className="col-5 ms-4 mt-3">
        <div style={styles.heading} className="">
          Fit Anywhere, Anytime: Your Portable Personal Trainer
        </div>
        <div style={styles.content}>
          No gym? Not a problem! Bring your fitness wherever you go. Our app
          puts individualized workouts right in your pocket. Set off on a
          fitness adventure of self-discovery. Our app is your ticket to
          becoming a better, healthier, and more confident version of yourself.
          Let the transformation begin!
        </div>
        <img src="/images/gym-pic-3.png" alt="nfgdfdfss" className="w-100" />
        <img />
      </div>
    </div>
  );
};

export default Home;
