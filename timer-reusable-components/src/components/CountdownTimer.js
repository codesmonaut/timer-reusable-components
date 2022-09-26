import { useState, useEffect } from 'react';

const CountdownTimer = ({cT}) => {
    const [days, setDays] = useState(`00`);
    const [hours, setHours] = useState(`00`);
    const [minutes, setMinutes] = useState(`00`);
    const [seconds, setSeconds] = useState(`00`);

    let interval = null;

    const startCountdownTimer = () => {
        const countdownTimestampDate = new Date(cT).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownTimestampDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            }

            if (distance > 0) {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startCountdownTimer();

        return () => clearInterval(interval);
    }, [cT])

    return (
        <div className="countdown-timer">
            <p>
                <span id="days">{(`0` + days).slice(-2)}</span>
                <span> days : </span>
                <span id="hours">{(`0` + hours).slice(-2)}</span>
                <span> hours : </span>
                <span id="minutes">{(`0` + minutes).slice(-2)}</span>
                <span> minutes : </span>
                <span id="seconds">{(`0` + seconds).slice(-2)}</span>
                <span> seconds </span>
            </p>
        </div>
    )
}

export default CountdownTimer;