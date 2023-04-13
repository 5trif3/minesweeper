import React from "react";

const StartModal = (props) => {


    // this modal will prompt on load and whenever the reset button is clicked
    // the size determines the row, column, mines, and flags (1:1)
    return (
        <div>
            <h1>Welcome to Minesweeper!</h1>
            <label htmlFor="size">Size: </label>
            <input type="number" id="size" placeholder="5" min="5"/>
            <button onClick={props.onStartGame}>Start!</button>
        </div>
    )
}

export default StartModal;