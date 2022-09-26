import { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const startTimer = () => {
        setTimerOn(true);
    }

    const stopTimer = () => {
        setTimerOn(false);
    }

    const resumeTimer = () => {
        setTimerOn(true);
    }

    const restartTimer = () => {
        setTime(0);
    }

    // useEffect hook runs every time timerOn variable change
    
    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10)
        }

        if (timerOn === false) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn])

    return (
        <div className="stopwatch">
            <p className="time">
                <span id="minutes">{(`0` + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span id="seconds">{(`0` + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span id="miliseconds">{(`0` + ((time / 10) % 100)).slice(-2)}</span>
            </p>
            <div className="buttons-holder">
                {!timerOn && time === 0 && <button className="start-btn" onClick={startTimer}>Start</button>}
                {timerOn && <button className="stop-btn" onClick={stopTimer}>Stop</button>}
                {!timerOn && time !== 0 && <button className="resume-btn" onClick={resumeTimer}>Resume</button>}
                {!timerOn && time > 0 && <button className="restart-btn" onClick={restartTimer}>Restart</button>}
            </div>
        </div>
    )
}

export default Stopwatch;