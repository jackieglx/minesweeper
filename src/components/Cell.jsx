import React from "react";
import "../styles/Cell.css";

const Cell = ({ cell, onLeftClick, onRightClick, gameOver }) => {
    const handleClick = () => {
        if (!cell.isFlagged && !cell.isSelected && !gameOver) {
            onLeftClick(cell.row, cell.col);
        }
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        if (!cell.isSelected && !gameOver) {
            onRightClick(cell.row, cell.col);
        }
    };

    return (
        <div
            className={`cell ${
                cell.isSelected || (gameOver && cell.isMine)
                    ? cell.isMine
                        ? "mine"
                        : "safe"
                    : cell.isFlagged
                        ? "flagged"
                        : "unselected"
            }`}
            onClick={handleClick}
            onContextMenu={handleRightClick}
        >
            {cell.isSelected || (gameOver && cell.isMine)
                ? cell.isMine
                    ? "💣" // Bomb icon
                    : cell.adjacentMines > 0
                        ? cell.adjacentMines // Adjacent mine count
                        : ""
                : cell.isFlagged
                    ? "🚩" // Flag icon
                    : ""}
        </div>
    );
};

export default Cell;
