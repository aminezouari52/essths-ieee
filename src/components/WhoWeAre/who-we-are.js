import Card from '../UI/Card/Card'
import classes from './who-we-are.module.css'

const WhoWeAre = () => {
  return (
    <Card title={'who we are'}>
      <div className={classes.content}>
        <div className={classes.logo} />
        <p>
          IEEE ESSTHS SB is one of the newest and most active SB's in Tunisia
          section, Founded by 12 students in H.S Sciences and Technologies
          Hammem Sousse in 2020. We currently have highly active members.Our
          vision is to improve the overall experience of students in our school
          and all over Tunisia by providing workshops and training sessions and
          competing in national and international challenges.
        </p>
      </div>
    </Card>
  )
}

export default WhoWeAre
