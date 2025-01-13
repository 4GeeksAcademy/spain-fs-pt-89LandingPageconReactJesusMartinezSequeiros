import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const Home = () => {
  const cards = [
    {
      image: "https://via.placeholder.com/500x325",
      title: "Card Title 1",
      description: "This is a description for Card 1.",
      buttonText: "Find Out More",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/500x325",
      title: "Card Title 2",
      description: "This is a description for Card 2.",
      buttonText: "Find Out More",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/500x325",
      title: "Card Title 3",
      description: "This is a description for Card 3.",
      buttonText: "Find Out More",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/500x325",
      title: "Card Title 4",
      description: "This is a description for Card 4.",
      buttonText: "Find Out More",
      link: "#",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="d-flex flex-wrap justify-content-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3">
        <p>Copyright © Your Website 2018</p>
      </footer>
    </div>
  );
};

export default Home;