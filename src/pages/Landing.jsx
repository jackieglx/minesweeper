import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate("/play");
    };

    return (
        <div className="landing">
            <h1 className="landing-title">Welcome to Minesweeper</h1>

            <div className="landing-info">
                <p>
                    A classic puzzle game of logic, strategy, and a little bit of luck!
                </p>

                <p>
                    Choose a difficulty level, avoid the mines, use logic to deduce their
                    locations, and have fun!
                </p>
                <p>
                    Whether you're a beginner or an expert, Minesweeper offers a challenge
                    for everyone.
                </p>
            </div>
            <button className="landing-button" onClick={handlePlayClick}>
                Play
            </button>
        </div>
    );
};

export default Landing;
