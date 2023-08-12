import './styles/App.css'
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Game } from './components/Game';
import forestLogo from './assets/class_logo/forest_logo.png'
import swordLogo from './assets/class_logo/sword_logo.png'
import runeLogo from './assets/class_logo/rune_logo.png'
import shadowLogo from './assets/class_logo/shadow_logo.png'
import dragonLogo from './assets/class_logo/dragon_logo.png'
import bloodLogo from './assets/class_logo/blood_logo.png'
import havenLogo from './assets/class_logo/haven_logo.png'
import portalLogo from './assets/class_logo/portal_logo.png'
import { getCardIDs, getCardIDsHard, cardShuffle } from './sv_data/data.js'

function App() {
  const [background, setBackground] = useState('opening')
  const [modalOpen, setModalOpen] = useState(true);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [playerWonModal, setPlayerWonModal] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('forest');
  const [selectedPack, setSelectedPack] = useState('29');
  const [selectedDifficulty, setSelectedDifficulty] = useState(6);
  
  const startGame = () => {
    setBackground(selectedClass);
    setModalOpen(false);
    setGameOpen(true);
  };
  const closeGame = () => {
    setBackground('opening');
    setGameOverModal(false);
    setPlayerWonModal(false);
    setGameOpen(false);
    setModalOpen(true);
  }
  const gameOver = () => {
    setGameOpen(false);
    setGameOverModal(true);
  }
  const playerWon = () => {
    setGameOpen(false);
    setPlayerWonModal(true);
  }

  const handleClassChange = (cardClass) => {
    setSelectedClass(cardClass);
  };

  const handlePackChange = (cardPack) => {
    setSelectedPack(cardPack.target.value);
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const getCardArray = (selectedDifficulty) => {
    let cardArray = [];
    if(selectedDifficulty === 20) {
      cardArray = getCardIDsHard(selectedClass, selectedPack);
    } else {
      cardArray = getCardIDs(selectedClass, selectedPack);
    }
    cardArray = cardShuffle(cardArray);
    cardArray = cardArray.slice(0, selectedDifficulty);
    return cardArray;
  }

  const classes = ['forest','sword','rune','dragon',
    'shadow','blood','haven','portal'];
  const logo = [forestLogo, swordLogo, runeLogo, dragonLogo,
    shadowLogo, bloodLogo, havenLogo, portalLogo];
    return (
    <div className={'app-container' + ' ' + background + ' ' + (gameOpen ? 'game-running' : '')}>
      <Modal isOpen={modalOpen}>
        <p>Choose your class:</p>
        <div>{
          classes.map((item, index) => (
            <div
              key={item}
              className={selectedClass === item ? 'selected' : ''}
              onClick={() => handleClassChange(item)}
            >
              <img src={logo[index]} alt="logo" />
            </div>
          ))
        }</div>

        <p>Select a card pack:</p>
        <select name="pack-select" id="pack-select" onChange={handlePackChange}>
          <option value="29">Heroes of Rivenbrandt</option>
        </select>

        <p>Select a difficulty:</p>
        <div>
          <button
            className={selectedDifficulty === 5 ? 'selected' : ''}
            onClick={() => handleDifficultyChange(5)}
          >
            Easy
          </button>
          <button
            className={selectedDifficulty === 10 ? 'selected' : ''}
            onClick={() => handleDifficultyChange(10)}
          >
            Medium
          </button>
          <button
            className={selectedDifficulty === 20 ? 'selected' : ''}
            onClick={() => handleDifficultyChange(20)}
          >
            Hard
          </button>
        </div>

        <div><button className="start-btn" onClick={startGame}>START GAME</button></div>
        
        <a href="https://shadowverse.com/" target="_blank" rel="noopener noreferrer">Play Shadowverse now!</a>
        <a href="https://github.com/ta457/shadowverse-memo" target="_blank" rel="noopener noreferrer">Github repo</a>
      </Modal>

      <Modal isOpen={gameOverModal}>
        <h1>GAME OVER</h1>
        <div></div>
        <div><button className="start-btn" onClick={closeGame}>Try again</button></div>
      </Modal>

      <Modal isOpen={playerWonModal}>
        <h1>YOU WON!</h1>
        <div></div>
        <div><button className="start-btn" onClick={closeGame}>Try again</button></div>
      </Modal>

      {gameOpen ? (
        <Game 
          difficulty={selectedDifficulty}
          closeGame={closeGame}
          gameOver={gameOver}
          playerWon={playerWon}
          cardArray={getCardArray(selectedDifficulty)}
        />
      ) : (<></>)}
    </div>
  )
}

export default App