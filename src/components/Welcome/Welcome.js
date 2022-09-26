import Button from '../UI/Button/Button'
import classes from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <h1>IEEE ESSTHS Student Branch</h1>
      <h6>Welcome to our official website!</h6>
      <a>
        <Button>Get to know the team</Button>
      </a>
    </div>
  )
}

export default Welcome
