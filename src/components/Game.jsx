import '../styles/Game.css';
import { useState } from 'react';
import { Card } from './Card';
import { getCardIDs } from '../sv_data/data.js'

// eslint-disable-next-line react/prop-types
function Game({ selectedClass, selectedPack, difficulty, closeGame, gameOver, playerWon }) {
  const [cardArr, setcardArr] = useState(getCardIDs(selectedClass, selectedPack));
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(true);

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

  const handleCardClick = (item) => {
    // console.log(item);
    // console.log(selectedCards);
    if(!selectedCards.includes(item)) {
      let newArr = selectedCards;
      newArr.push(item);
      setSelectedCards(newArr);
    } else {
      gameOver();
    }

    if(selectedCards.length === difficulty) {
      playerWon();
    }

    setcardArr(prevArr => shuffle(prevArr));
    
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className='game-header'>
        <button className='quit-btn' onClick={closeGame}>Quit</button>
        <h2>Score: {selectedCards.length}/{difficulty}</h2>
      </div>
      <div className='game-container'>
        {cardArr.map((item, index) => index < difficulty && (
          <Card 
            key={item}
            item={item}
            setIsFlipped={setIsFlipped}
            isFlipped={isFlipped}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
    </div>
  )
}

export { Game }