import classes from './Footer.module.css'

const Footer = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">ABOUT</a>
        </li>

        <li>
          <a href="/">ACTIVITIES</a>
        </li>

        <li>
          <a href="/">CALENDER</a>
        </li>

        <li>
          <a href="/">HOME</a>
        </li>

        <li>
          <a href="/">OUR MEMBERS</a>
        </li>

        <li>
          <a href="/">CS ACTIVITIES</a>
        </li>

        <li>
          <a href="/">IAS ACTIVITIES</a>
        </li>

        <li>
          <a href="/">MD ACTIVITIES</a>
        </li>

        <li>
          <a href="/">PES ACTIVITIES</a>
        </li>

        <li>
          <a href="/">RAS ACTIVITIES</a>
        </li>

        <li>
          <a href="/">WIE ACTIVITIES</a>
        </li>
      </ul>

      <p>Made by IEEE ESSTHS | All Rights Reserved ®</p>
    </nav>
  )
}

export default Footer
