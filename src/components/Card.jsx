import '../styles/Card.css';
import Tilt from "react-parallax-tilt";
import { useEffect } from 'react';
import cardBack from '../assets/sleeve/card_sleeve.png'

// eslint-disable-next-line react/prop-types
function Card({ item, onClick, isFlipped, setIsFlipped }) {

  useEffect(() => {
    if (isFlipped) {
      const flipBackTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 500);
      return () => clearTimeout(flipBackTimeout);
    }
  }, [isFlipped]);

  return (
    <Tilt
      tiltReverse
      reset
      glareEnable={false}
      // glareMaxOpacity={0.4}
      // glareColor={"#ffffff"}
      // glarePosition="all"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`} 
        onClick={onClick}
        key={item}
      >
        <div className="card-inner">
          <div className="card-front">
            <img src={"https://svgdb.me/assets/cards/en/C_" + item + ".png"} alt="card" />
          </div>
          <div className="card-back">
            <img src={cardBack} alt="card-back" />
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export { Card }