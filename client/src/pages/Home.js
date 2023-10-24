import React from "react";
import Header from "../components/Header";
import CardContent from "../components/CardContent";
import CardImage from "../components/CardImage";
import communityImage from "../assets/community.jpg";
import insightsImage from "../assets/insights.jpeg";
import reccommendationImage from "../assets/reccommendation.jpg";
import monitor from "../assets/monitor.jpg";

const Home = () => {
  const data = [
    {
      image: monitor,
      content:
        "Welcome to Workout Tracker, the ultimate tool to monitor, track, and elevate your fitness routine. Stay motivated and reach your goals faster with our intuitive workout tracker!",
    },
    {
      image: insightsImage,
      content:
        "Log your workouts, track your progress, and watch yourself grow stronger every day. Our detailed progress charts and insights help you stay on top of your game and push your limits.",
    },
    {
      image: reccommendationImage,
      content:
        "Receive personalized workout recommendations and insights based on your performance and goals. We analyze your data to help you optimize your routine and ensure you’re getting the most out of every workout.",
    },
    {
      image: communityImage,
      content:
        "Become part of a thriving community of fitness enthusiasts! Share your progress, celebrate milestones, and connect with others who are just as dedicated to their fitness journey as you are.      ",
    },
  ];
  return (
    <div>
      <Header />
      {/* Cards */}

      <div className="card-container">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className="card-wrapper">
                <CardImage image={item.image} />
                <CardContent content={item.content} />
              </div>
            );
          } else {
            return (
              <div className="card-wrapper">
                <CardContent content={item.content} />
                <CardImage image={item.image} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
