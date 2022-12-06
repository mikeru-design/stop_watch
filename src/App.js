import styles from './styles/app.module.scss'
import TimeShow from './components/TimeShow/TimeShow';
import Button from './components/Button/Button';
import { useEffect, useState } from 'react';


function App() {

  const [time, setTime] = useState(0);
  const [timeStart, setTimeStart] = useState(null);

  const startTimeFunc = () => {
    setTime((time)=> time + 10)
  }
  const resetTimeFunc = () => {
    setTime(0)
  }

  useEffect(()=>{
    let interval = null;

    if(timeStart === true){
      interval = setInterval(startTimeFunc, 10);
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timeStart])

  const startTime = () => {setTimeStart(true)};
  const stopTime = () => {setTimeStart(false)};

  return (
    <div className={styles.main}>
      <TimeShow time={time}/>
      <div className={styles.buttonsWrapper}>
        <Button className={styles.startButton} onClick={startTime}>Start</Button>
        <Button className={styles.stopButton} onClick={stopTime}>Stop</Button>
        <Button className={styles.resetButton} onClick={resetTimeFunc}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
