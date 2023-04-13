import React, { useState } from 'react';

import Board from './components/Board/Board';
import HeadBoard from './components/HeadBoard/HeadBoard';
import StartModal from './components/StartModal/StartModal';

import './App.css';

//I'll include localstorage to store the boardState and the board in board.js

function App() {
  const [boardState, setBoardState] = useState({
    status: "start", //"start", "in-game", "lost", "won"
    size: 10,
    flags: 10,
    mines: 10,
    time: 0,
    hasFlag: false,
    hasMine: false,
  })
  const [showModal, setShowModal] = useState(true)


  const onStartGame = (value) => {
    setBoardState({
      size: value, 
      flags: value, 
      mines: value,
      ...boardState
    })
    setShowModal(false)
  }

  const onShowStartModal = () => {
    setShowModal(true)
  }

  return (
    <div className="App">
      {showModal && <StartModal onStartGame={onStartGame} />} 
      <h1>Minesweeper</h1>
      <HeadBoard onShowStartModal={onShowStartModal} time={boardState.time} flags={boardState.flags} />
      <Board rows={boardState.size} columns={boardState.size} mines={boardState.mines}/>
    </div>
  );
}

export default App;
