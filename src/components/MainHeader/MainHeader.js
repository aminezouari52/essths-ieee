import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'
import logo from '../../images/logo-white.png'

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <div>
        <img src={logo} alt="white-logo" width="100" height="50" />
      </div>
      <Navigation />
    </header>
  )
}

export default MainHeader
