import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <h1 className={classes.title}>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Card
