import React from 'react'

import Logo from '../assets/Logo.png'
import LogoLosAngeles from '../assets/LogoLosAngeles.png'
import styles from '../styles/Header.module.css'

function Header({handleClick,isContent = true}) {
  return (
    <div className={`${styles.main} ${isContent ? styles.mainContent: null}`}>
        <div className={styles.left}>
        {isContent ? <img src={LogoLosAngeles} alt="logo" /> : <img src={Logo} alt="logo" /> }
        </div>
        <div className={`${styles.right} ${isContent ? styles.nonHero: null}`}>
        <div style={{cursor:'pointer'}} onClick={handleClick} id='history'>01. HISTORY</div>
        <div style={{cursor:'pointer'}} onClick={handleClick} id='team'>02. TEAM</div>
        </div>

    </div>
  )
}

export default Header