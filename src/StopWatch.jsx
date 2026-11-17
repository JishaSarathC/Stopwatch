import {useState, useEffect } from "react";
export default function StopWatch(){
    const [seconds, setSeconds]=useState(0);
    const [isRunning, setIsRunning]=useState(false);

    const handleStartStop =()=>{
        if(isRunning) {
            setIsRunning(false);
            
        }else{
            setSeconds(0);
            setIsRunning(true);
        }
       
    };
    useEffect(()=>{
        let interval;

        if(isRunning) {
            interval= setInterval(() => {
                setSeconds(prevSeconds=>prevSeconds+1);
            },1000);
        }
        return()=>clearInterval(interval)
    }, [isRunning]);

    const handleReset=()=>{

        setIsRunning(false);
        setSeconds(0);
    };

    const minutes=Math.floor(seconds/60);
    const remainingSeconds=seconds % 60;
    return(
        <div>
            <h1>Stopwatch</h1>
            <h3>Time: {minutes}:{String(remainingSeconds).padStart(2, "0")}</h3>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop": "Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}