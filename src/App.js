import { useState } from 'react';
import './App.css';
import Game from './main/game';

function App() {
  const [noOfPl, setNoOfPl] = useState(2)
  const [startGame, setStartGame] = useState(false)

  return (
    <div className="App">
      <div style={{ width:'100%' }}>
        <h1>Chain Reaction</h1>
      </div>
      <div className='gamePlay'>
        {
          startGame ?
            <Game noPl={noOfPl} />
          :
            <div className='gameSettingsDiv'>
              <div className='gameSetTitle'>How many players ?</div>
              <div className='gameSetDiag'>
                <div onClick={()=> setNoOfPl(noOfPl!==2 ? noOfPl-1 : 2) }>-</div>
                  <p>{noOfPl}</p>
                <div onClick={()=> setNoOfPl(noOfPl!==6 ? noOfPl+1 : 6) }>+</div>
              </div>
              <div className='gameStartBtn' onClick={()=> setStartGame(true)}>
                Start
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
