import React, { useEffect } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Players from './pages/Players';
import PlayerInfo from './pages/PlayerInfo';
import Games from './pages/Games'
import GameInfo from './pages/GameInfo';
import Studios from './pages/Studios';
import StudioInfo from './pages/StudioInfo';
import { useNavigate } from 'react-router-dom';

import {useState} from 'react';

import testgames from './test-data/games';



function App(pool) {
  const navigate = useNavigate();
  const pholder = {username: "kaushik",  email: "pahujak@oregonstate.edu", phone: "1234567890", birthdate: "02/22/2002"};
  const [PlayerToView, setPlayerToView]=useState();
  const [StudioToView, setStudioToView]=useState();
  const [GameToView, setGameToView]=useState();

  const SetPlayer = async (target)=>{
    console.log("I'm really trying here.");
    console.log(target);
    setPlayerToView(target);
    console.log("checking if it really changed");
    console.log(PlayerToView);
    navigate("/PlayerInfo");
  }
  
  useEffect(() =>{
    console.log("something changed.");
    console.log(PlayerToView);
  }, [PlayerToView])
  
  return (
    <div className="App">
      
      <div className="App-header">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Players" element={<Players setPlayerToView={SetPlayer}/>} pool={pool}/>
          <Route path="/PlayerInfo" element={<PlayerInfo PlayerToView={PlayerToView} pool={pool}/>}/>
          <Route path="/Studios" element={<Studios setStudioToView={setStudioToView} pool={pool}/>}/>
          <Route path="/StudioInfo" element={<StudioInfo StudioToView={StudioToView} pool={pool}/>}/>
          <Route path="/Games" element={<Games setGameToView={setGameToView} pool={pool}/>}/>
          <Route path="/GameInfo" element={<GameInfo game={GameToView} pool={pool}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
