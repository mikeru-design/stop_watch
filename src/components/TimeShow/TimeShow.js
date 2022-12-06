import styles from './TimeShow.module.scss'


const TimeShow = props => {

  return (
    <div>
      <span>
        {("0" + Math.floor((props.time / 600000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span>
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  )
}

export default TimeShow;