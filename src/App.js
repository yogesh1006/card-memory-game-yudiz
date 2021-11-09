import { useState, useEffect } from "react";
import "./App.css";
import TechCard from "./components/TechCard";

const techImages = [
  { src: "/img/css.png", matched: false },
  { src: "/img/html-5.png", matched: false },
  { src: "/img/javascript.png", matched: false },
  { src: "/img/nodejs.png", matched: false },
  { src: "/img/react.png", matched: false },
  { src: "/img/redux.png", matched: false },

  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/angularjs-logo.png", matched: false },
  { src: "/img/mongodb.png", matched: false },
  { src: "/img/express-js-png-5.png", matched: false },
  { src: "/img/typescript.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
  { src: "/img/jwt.png", matched: false },
  { src: "/img/graphql.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
];

function App() {
  const [tech, setTech] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoicetwo] = useState(null);

  const shuffleTechImages = () => {
    const techImg = [...techImages, ...techImages]
      .sort(() => Math.random() - 0.5)
      .map((tech) => ({ ...tech, id: Math.random() }));

    setTech(techImg);
    setTurns(0);
  };

  const handleChoice = (tech) => {
    // console.log(tech);
    choiceOne ? setChoicetwo(tech) : setChoiceOne(tech);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setTech((prevTech) => {
          return prevTech.map((tech) => {
            if (tech.src === choiceOne.src) {
              return { ...tech, matched: true };
            } else {
              return tech;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoicetwo(null);
    setTurns((prev) => prev + 1);
  };

  console.log(tech);

  return (
    <div className="App">
      <h1>Card Memory Game</h1>
      <button onClick={shuffleTechImages}>New Game</button>
      <div className="tech-wrapper">
        {tech.map((tech) => {
          return (
            <TechCard
              key={tech.id}
              tech={tech}
              handleChoice={handleChoice}
              flipped={tech === choiceOne || tech === choiceTwo || tech.matched}
            />
          );
        })}
      </div>
      <h4>{turns}</h4>
    </div>
  );
}

export default App;
