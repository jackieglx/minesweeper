import React, { useState } from "react";
import Cell from "./Cell";
import "../styles/Board.css";

const Board = ({ board, setBoard, onGameOver, onWin, gameOver }) => {
    const [isFirstClick, setIsFirstClick] = useState(true);

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];

    const autoClear = (row, col, updatedBoard) => {
        const cell = updatedBoard[row][col];
        if (cell.isSelected || cell.isMine || cell.isFlagged) return;

        cell.isSelected = true;

        // If the cell has no adjacent mines, recursively reveal its neighbors
        if (cell.adjacentMines === 0) {
            directions.forEach(([dx, dy]) => {
                const newRow = row + dx;
                const newCol = col + dy;

                if (
                    newRow >= 0 &&
                    newRow < updatedBoard.length &&
                    newCol >= 0 &&
                    newCol < updatedBoard[0].length
                ) {
                    autoClear(newRow, newCol, updatedBoard);
                }
            });
        }
    };

    const moveMine = (row, col, updatedBoard) => {

        for (let r = 0; r < updatedBoard.length; r++) {
            for (let c = 0; c < updatedBoard[0].length; c++) {
                const newCell = updatedBoard[r][c];
                if (!newCell.isMine && !(r === row && c === col)) {
                    newCell.isMine = true;
                    updatedBoard[row][col].isMine = false;
                    updateAdjacentCounts(row, col, updatedBoard, true);
                    updateAdjacentCounts(r, c, updatedBoard);
                    return;
                }
            }
        }
    };

    const updateAdjacentCounts = (row, col, updatedBoard, isRemoving = false) => {
        directions.forEach(([dx, dy]) => {
            const newRow = row + dx;
            const newCol = col + dy;

            if (
                newRow >= 0 &&
                newRow < updatedBoard.length &&
                newCol >= 0 &&
                newCol < updatedBoard[0].length
            ) {
                updatedBoard[newRow][newCol].adjacentMines += isRemoving ? -1 : 1;
            }
        });
    };

    const handleLeftClick = (row, col) => {
        const updatedBoard = [...board];
        const cell = updatedBoard[row][col];

        // Safe First Turn logic
        if (isFirstClick) {
            setIsFirstClick(false);

            // If the first clicked cell is a mine, move it
            if (cell.isMine) {
                moveMine(row, col, updatedBoard);
            }
        }

        if (cell.isMine) {
            onGameOver();
            return;
        }

        // Auto clear for empty cells
        if (cell.adjacentMines === 0) {
            autoClear(row, col, updatedBoard);
        } else {
            cell.isSelected = true;
        }

        // Check for win condition
        const hasWon = updatedBoard.every((row) =>
            row.every((cell) => cell.isMine || cell.isSelected)
        );
        if (hasWon) {
            onWin();
        }

        setBoard(updatedBoard);
    };

    const handleRightClick = (row, col) => {
        const updatedBoard = [...board];
        const cell = updatedBoard[row][col];
        cell.isFlagged = !cell.isFlagged;
        setBoard(updatedBoard);
    };

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div className="board-row" key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            cell={cell}
                            onLeftClick={handleLeftClick}
                            onRightClick={handleRightClick}
                            gameOver={gameOver}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
