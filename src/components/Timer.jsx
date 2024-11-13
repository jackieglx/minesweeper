import React, { useEffect, useState } from "react";
import "../styles/Timer.css";

const Timer = ({ isRunning, elapsedTime, setElapsedTime }) => {
    const [time, setTime] = useState(elapsedTime);

    useEffect(() => {
        setTime(elapsedTime);
    }, [elapsedTime]);

    useEffect(() => {
        let timerInterval;
        if (isRunning) {
            timerInterval = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime + 1;
                    setElapsedTime(newTime);
                    return newTime;
                });
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning, setElapsedTime]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600).toString().padStart(2, "0");
        const minutes = Math.floor((time % 3600) / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return <div className="timer">{formatTime()}</div>;
};

export default Timer;
