import React, { useEffect, useState } from "react";
import Row from "../Row/Row";

import styles from './Board.module.css'

const Board = (props) => {
    const onCreateBoard = (props) => {
        let board = [];
        const rows = props.rows;
        const columns = props.columns;
    
        //Building board one by one
        for (let row = 0; row < rows; row++) {
            board.push([])
    
            for (let col = 0; col < columns; col++) {
                board[row].push({
                    x: col,
                    y: row,
                    count: 0,
                    hasFlag: false,
                    hasMine: false,
                    isOpen: false
                })
            }  
        }

        // Adding mines randomly
        for (let mine = 0; mine < props.mines; mine++) {
            let randomRow = Math.floor(Math.random() * rows)
            let randomCol = Math.floor(Math.random() * columns)

            let cell = board[randomRow][randomCol];

            //If cell has mine, will reset the counter and add another
            if (cell.hasMine) {
                mine--;
            } else {
                cell.hasMine = true;
            }
        }
        return board;
    }

    const onOpenCell = (cell) => {
        const rows = rowState
        const currentCell = rows[cell.row][cell.col];

        //this function will fire once the user left clicks on a cell
        //it will be propped down to cell.js where the conditions are tested
        //this function will be placed in onClick property of Cell

        //conditions to consider
        //1. if the cell is not yet open and the cell does not contain a flag
        //2. if the cell has a mine
        //3. check whether there are any mines around the selected cell
        //4. if there's a mine around, count the total number of mines and show the count on the selected cell
        //5. if no mines present, repeat step 4 on the adjacent cells until a cell catches a mine around it
        //6. start the timer once the first cell is opened
        
    }

    const onPlaceFlag = (cell) => {
        const rows = rowState
        const currentCell = rows[cell.row][cell.col];

        //this function will place a flag on the selected cell using right mouse button
        //this function will be placed in onContextMenu property of Cell
        

        //conditions to consider
        //1. if there's still flags left
        //2. if the current cell has already a flag
    }

    

    const [rowState, setRowState] = useState(onCreateBoard(props))

    const rows = rowState.map((row, index) => {
        return (
            <Row 
                cells={row}
                key={index}
            />
        )
    })

    return (
    <div className={styles.board}>
        {rows}
    </div>
    )
    
}

export default Board;