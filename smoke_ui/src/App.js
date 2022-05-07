import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import Players from './pages/Players';
import PlayerInfo from './pages/PlayerInfo';
import Games from './pages/Games'
import GameInfo from './pages/GameInfo';
import Studios from './pages/Studios';
import StudioInfo from './pages/StudioInfo';

import {useState} from 'react';

function App() {

  const [PlayerToView, setPlayerToView]=useState();
  // const [setStudioToView, setStudioToView]=useState();
  // const [setGameToView, setGameToView]=useState();

  return (
    
    <div className="App">
      
      <div className="App-header">
        <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
            <PlayerInfo PlayerToView={PlayerToView} />
          </Route>
          <Route path="/Studios">
            <Studios />
          </Route>
          {/* <Route path="/StudioInfo">
          </Route> */}
          <Route path="/Studios" element={<Studios/>}/>
          <Route path="/Games" element={<Games />}/>
          {/* <Route path="/GameInfo">
            <GameInfo GameToView={GameToView} />
          </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
