import { createContext, useState, useEffect } from "react";
import { saveGameState, loadGameState } from "../utils/localStorage";


export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState([]);
    const [gameStatus, setGameStatus] = useState("playing");

    useEffect(() => {
        const savedState = loadGameState();
        if (savedState) {
            setBoard(savedState.board);
            setGameStatus(savedState.gameStatus);
        }
    }, []);

    useEffect(() => {
        saveGameState({ board, gameStatus });
    }, [board, gameStatus]);

    return (
        <GameContext.Provider value={{ board, setBoard, gameStatus, setGameStatus }}>
            {children}
        </GameContext.Provider>
    );
};
