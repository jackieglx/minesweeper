const GAME_STATE_KEY = "minesweeperGameState";

export const saveGameState = (state) => {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
};

export const loadGameState = () => {
    const savedState = localStorage.getItem(GAME_STATE_KEY);
    return savedState ? JSON.parse(savedState) : null;
};

export const clearGameState = () => {
    localStorage.removeItem(GAME_STATE_KEY);
};
