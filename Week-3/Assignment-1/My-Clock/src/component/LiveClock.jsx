import { useEffect, useState } from "react";
import "../LiveClock.css";

export default function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString("en-GB");
    };

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6;
    const hourDeg = hours * 30 + minutes * 0.5;

    return (
        <div className="container">
            <div className="FirstClock">
                <div className="DigitalClock">
                    <h1>Live Digital Clock</h1>
                    <h2>{time.toLocaleTimeString()}</h2>
                    <p>Updates every second using useEffect</p>
                </div>

                <div className="SavedTime">
                    <h1>Saved Time</h1>
                    <img src="../../public/Analog.png" alt="AnalogClock" />
                    <img src="../../public/Digital.png" alt="DigitalClock" />
                </div>
            </div>

            <div className="AnalogClock">
                <h1>Live Analog Clock</h1>
                <div className="clock">
                    {[...Array(60)].map((_, index) => (
                        <div
                            key={index}
                            className={`point ${index % 5 === 0 ? "big" : ""}`}
                            style={{
                                transform: `rotate(${index * 6}deg)`
                            }}
                        ></div>
                    ))}

                    {[...Array(12)].map((_, index) => {
                        const value = (index + 1) * 5;
                        const angle = value * 6;

                        return (
                            <div
                                key={value}
                                className="minute-number"
                                style={{
                                    transform: `rotate(${angle}deg)`
                                }}
                            >
                                <span
                                    style={{
                                        transform: `rotate(-${angle}deg)`
                                    }}
                                >
                                    {value}
                                </span>
                            </div>
                        );
                    })}

                    {[...Array(12)].map((_, index) => {
                        const number = index + 1;
                        const angle = number * 30;

                        return (
                            <div
                                key={number}
                                className="number"
                                style={{
                                    transform: `rotate(${angle}deg)`
                                }}
                            >
                                <span
                                    style={{
                                        transform: `rotate(-${angle}deg)`
                                    }}
                                >
                                    {number}
                                </span>
                            </div>
                        );
                    })}

                    <div
                        className="hand hour"
                        style={{
                            transform: `translateX(-50%) rotate(${hourDeg}deg)`
                        }}
                    ></div>

                    <div
                        className="hand minute"
                        style={{
                            transform: `translateX(-50%) rotate(${minuteDeg}deg)`
                        }}
                    ></div>

                    <div
                        className="hand second"
                        style={{
                            transform: `translateX(-50%) rotate(${secondDeg}deg)`
                        }}
                    ></div>

                    <div className="center-dot">
                    </div>
                </div>
                <h2>{formatTime(time)}</h2>
            </div>



        </div>
    );
}