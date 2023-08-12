import '../styles/Game.css';
import { useState } from 'react';
import { Card } from './Card';
import { cardShuffle } from '../sv_data/data.js'

// eslint-disable-next-line react/prop-types
function Game({ difficulty, closeGame, gameOver, playerWon, cardArray }) {
  const [cardArr, setcardArr] = useState(cardShuffle(cardArray));
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(true);

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

    setcardArr(prevArr => cardShuffle(prevArr));
    
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