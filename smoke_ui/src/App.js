import React from 'react';
import {Route, Routes } from 'react-router-dom';
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
  const pholder = {username: "kaushik",  email: "pahujak@oregonstate.edu", phone: "1234567890", birthdate: "02/22/2002"};
  const [PlayerToView, setPlayerToView]=useState(pholder);
  const [StudioToView, setStudioToView]=useState();
  // const [setGameToView, setGameToView]=useState();
  

  return (
    
    <div className="App">
      
      <div className="App-header">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Players" element={<Players setPlayerToView={setPlayerToView}/>}/>
          <Route path="/PlayerInfo" element={<PlayerInfo PlayerToView={PlayerToView} />}/>
          <Route path="/Studios" element={<Studios setStudioToView={setStudioToView}/>}/>
          <Route path="/StudioInfo" element={<StudioInfo StudioToView={StudioToView} />}/>
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
