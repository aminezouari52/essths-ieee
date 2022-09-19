import React from 'react'

import classes from './Navigation.module.css'

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
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
          <a href="/">CONTACT US</a>
        </li>

        <li>
          <a href="/">search</a>
        </li>

        <li></li>
      </ul>
    </nav>
  )
}

export default Navigation
