import React from "react";
import { useNavigate } from "react-router-dom";

const DifficultySelector = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/game/easy")}>Easy</button>
            <button onClick={() => navigate("/game/medium")}>Medium</button>
            <button onClick={() => navigate("/game/hard")}>Hard</button>
        </div>
    );
};

export default DifficultySelector;
