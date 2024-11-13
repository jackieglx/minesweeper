import "../styles/Game.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Board from "../components/Board";
import Timer from "../components/Timer";
import { generateInitialBoard } from "../utils/generateBoard";

const Game = () => {
    const { difficulty } = useParams();

    const settings = {
        easy: { rows: 8, cols: 8, mines: 10 },
        medium: { rows: 16, cols: 16, mines: 40 },
        hard: { rows: 30, cols: 30, mines: 99 },
    };

    const { rows, cols, mines } = settings[difficulty] || settings.easy;

    // Initialize the state from localStorage if available
    const [board, setBoard] = useState(() => {
        const savedGame = JSON.parse(localStorage.getItem("minesweeper-game"));
        return savedGame?.difficulty === difficulty
            ? savedGame.board
            : generateInitialBoard(rows, cols, mines);
    });

    const [isRunning, setIsRunning] = useState(() => {
        const savedGame = JSON.parse(localStorage.getItem("minesweeper-game"));
        return savedGame?.difficulty === difficulty ? savedGame.isRunning : true;
    });

    const [gameOver, setGameOver] = useState(() => {
        const savedGame = JSON.parse(localStorage.getItem("minesweeper-game"));
        return savedGame?.difficulty === difficulty ? savedGame.gameOver : false;
    });

    const [elapsedTime, setElapsedTime] = useState(() => {
        const savedGame = JSON.parse(localStorage.getItem("minesweeper-game"));
        return savedGame?.difficulty === difficulty ? savedGame.elapsedTime : 0;
    });

    // Save the game state to localStorage whenever it changes
    useEffect(() => {
        const gameState = {
            difficulty,
            board,
            isRunning,
            gameOver,
            elapsedTime,
        };
        localStorage.setItem("minesweeper-game", JSON.stringify(gameState));
    }, [difficulty, board, isRunning, gameOver, elapsedTime]);

    const handleGameOver = () => {
        setGameOver(true);
        setIsRunning(false);

        setTimeout(() => {
            alert("Game Over! You hit a mine.");
        }, 100);
    };

    const handleWin = () => {
        setGameOver(true);
        setIsRunning(false);
        alert("Congratulations! You won.");
    };

    const handleReset = () => {
        setBoard(generateInitialBoard(rows, cols, mines));
        setIsRunning(true);
        setGameOver(false);
        setElapsedTime(0); // Reset the timer
    };

    return (
        <div className={`game-container ${difficulty}-mode`}>
            <div className="center-content">
                <button className="reset-button" onClick={handleReset}>
                    Reset
                </button>
                <Board
                    rows={rows}
                    cols={cols}
                    mines={mines}
                    board={board}
                    setBoard={setBoard}
                    onGameOver={handleGameOver}
                    onWin={handleWin}
                    gameOver={gameOver}
                />
                <Timer
                    isRunning={isRunning}
                    elapsedTime={elapsedTime}
                    setElapsedTime={setElapsedTime}
                />
            </div>
        </div>
    );
};

export default Game;
