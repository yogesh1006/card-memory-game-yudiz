import React from "react";
import "./techcard.css";

const TechCard = ({ tech,handleChoice ,flipped}) => {

    const handleCoverClick =() =>{
        handleChoice(tech)
    }
  return (
    <div className="tech">
      <div className={flipped ? "flipped" : ""}>
        <img className="tech-front" src={tech.src} alt="tech-front" />
        <img className="tech-back" src="/img/cover.png" alt="tech-back"  onClick={handleCoverClick}/>
      </div>
    </div>
  );
};

export default TechCard;
