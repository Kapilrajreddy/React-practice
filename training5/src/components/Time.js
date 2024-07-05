import React, { useState, useEffect, useRef } from "react";

const Time = () => {
  const [count, setCount] = useState(0);
  const [start,setStart] = useState(false)
  const [pause,setPause] = useState(false)
  const [intervals,setIntervals] = useState([])

  const intervalRef = useRef(0);

  useEffect(() => {
    if(start&&!pause){
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
},[start,pause])


const handleStart = ()=>{
    setStart(true)
    setPause(false)
}

const handleStop=()=>{
    setStart(false);
    setIntervals([...intervals, count]);
    setCount(0)
}


const handlePause=()=>{
    setPause(!pause)
    
    
}

const format=(count)=>{

    const seconds = `0${count%60}`.slice(-2)
    const minutes = Math.floor(count/60) 
    const getMinutes = `0${minutes%60}`.slice(-2)
    const getHours = `0${Math.floor(count/3600)}`.slice(-2)

    const time = `${getHours}-${getMinutes}-${seconds}`
    return time

}

const [currentTime,setCurrentTime] = useState(()=>new Date().toTimeString().split(" ")[0]

)



useEffect(()=>{
    const time = setInterval(()=>{
        setCurrentTime(new Date().toTimeString().split(" ")[0])
    },1000)
})


  return (
    <div>
      <h1>{format(count)}</h1>
      <button onClick={handleStart}>Start</button>

      <button onClick={handlePause}>{`${pause ? "Resume" : "Pause"}`}</button>
      <button onClick={handleStop}>Stop</button>
      {intervals.map((time) => (
        <h1>{format(time)}</h1>
      ))}
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Time;
