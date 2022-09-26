import logo from '../../images/logo-white.png'
import Navigation from './Navigation'
import classes from './Header.module.css'
import { useState, useEffect } from 'react'

const MainHeader = () => {
  const [scroll, setScroll] = useState(false)

  const changeNavbarColor = (event) => {
    if (window.scrollY >= 150) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <header className={`${classes.header} ${scroll && classes.scroll} `}>
      <div>
        <img src={logo} alt="white-logo" width="100" height="50" />
      </div>
      <Navigation />
    </header>
  )
}

export default MainHeader
