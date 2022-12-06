import TimeShow from './components/TimeShow/TimeShow';
// import Button from './components/Button/Button';
import { useEffect, useState } from 'react';


function App() {

  const [time, setTime] = useState(0);

  let timer = null;

  const startTimeFunc = () => {
    setTime((time)=> time + 10)
  }

  const startTime = () => setInterval(startTimeFunc, 10);
  const stopTime = () => clearInterval(startTimeFunc);


  return (
    <div>
      <TimeShow time={time}/>
      <button onClick= {startTime}>Start</button>
      <button onClick= {stopTime}>Stop</button>
      <button >Reset</button>
    </div>
  );
}

export default App;
