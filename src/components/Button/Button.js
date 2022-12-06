import styles from './Button.module.scss'

const Button = props => {

  return (
    <div>
      <button onClick= {props.startTime}>Start</button>
      <button onClick= {props.stopTime}>Stop</button>
      <button onClick= {props.addTime}>Reset</button>
    </div>
  )
}

export default Button;