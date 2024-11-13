import React from "react";
import "../styles/Rules.css";

const Rules = () => {
    return (
        <div className="rules-container">
            <h1 className="rules-title">Minesweeper Rules</h1>
            <ol className="rules-list">
                <li>
                    <strong>Objective:</strong>
                    <ul>
                        <li>
                            The goal is to uncover all squares on the grid without detonating any mines. The game is won when all non-mine squares are revealed.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Gameplay:</strong>
                    <ul>
                        <li>The grid consists of hidden squares, some of which contain mines.</li>
                        <li>
                            Clicking a square reveals what’s underneath it:
                            <ul>
                                <li>
                                    <strong>A number:</strong> Indicates how many mines are adjacent to that square (including diagonally).
                                </li>
                                <li>
                                    <strong>A blank space:</strong> No adjacent mines. All nearby blank spaces will automatically be revealed.
                                </li>
                                <li>
                                    <strong>A mine:</strong> Game over.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Marking Mines:</strong>
                    <ul>
                        <li>
                            Players can right-click (or use a specific input, depending on the device) to place a flag on squares they believe contain mines.
                        </li>
                        <li>This helps keep track of where mines might be located.</li>
                    </ul>
                </li>
                <li>
                    <strong>Numbers and Their Meaning:</strong>
                    <ul>
                        <li>
                            The number on a revealed square shows the total number of mines in the eight surrounding squares. Use this information to deduce where the mines are.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Winning the Game:</strong>
                    <ul>
                        <li>
                            To win, uncover all squares that don’t contain mines. All mines do not need to be flagged to win, but flagging helps avoid clicking on mines.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Losing the Game:</strong>
                    <ul>
                        <li>Clicking on a square containing a mine ends the game.</li>
                    </ul>
                </li>
                <li>
                    <strong>Strategy:</strong>
                    <ul>
                        <li>Start by clicking random squares to get an idea of the board layout.</li>
                        <li>
                            Use logic to deduce which squares are safe or contain mines based on the numbers revealed.
                        </li>
                        <li>If unsure, you may need to take a risk and guess.</li>
                    </ul>
                </li>
                <li>
                    <strong>Levels of Difficulty:</strong>
                    <ul>
                        <li>
                            <strong>Beginner:</strong> Smaller grid (e.g., 9x9) with fewer mines.
                        </li>
                        <li>
                            <strong>Intermediate:</strong> Medium-sized grid (e.g., 16x16) with more mines.
                        </li>
                        <li>
                            <strong>Expert:</strong> Large grid (e.g., 30x30) with many mines.
                        </li>
                    </ul>
                </li>
            </ol>
            <p className="enjoy-message">Enjoy the challenge of solving the puzzle!</p>
        </div>
    );
};

export default Rules;
