import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

  // const [setPlayerToView, setPlayerToView]=useState();
  // const [setStudioToView, setStudioToView]=useState();
  // const [setGameToView, setGameToView]=useState();

  return (
    
    <div className="App">
      
      <div className="App-header">
        <Router>
          
          <Route path="/" exact> <HomePage/> </Route>
          <Route path="/Players">
            <Players />
          </Route>
          {/* <Route path="/PlayerInfo">
            <PlayerInfo PlayerToView={PlayerToView} />
          </Route> */}
          <Route path="/Studios">
            <Studios />
          </Route>
          {/* <Route path="/StudioInfo">
            <StudioInfo StudioToView={StudioToView} />
          </Route> */}
          <Route path="/Games">
            <Games />
          </Route>
          {/* <Route path="/GameInfo">
            <GameInfo GameToView={GameToView} />
          </Route> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
