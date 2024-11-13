import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Play.css";

const Play = () => {
    const navigate = useNavigate();

    return (
        <div className="play">
            <h2>Select Difficulty</h2>
            <div className="difficulty-buttons">
                <button onClick={() => navigate("/game/easy")}>Easy</button>
                <button onClick={() => navigate("/game/medium")}>Medium</button>
                <button onClick={() => navigate("/game/hard")}>Hard</button>
            </div>
        </div>
    );
};

export default Play;
