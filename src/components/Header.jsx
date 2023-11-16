import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

import Logo from '../assets/Logo.png'
import LogoLosAngeles from '../assets/LogoLosAngeles.png'
import styles from '../styles/Header.module.css'

function Header({ handleClick, isContent = true }) {
  const [bar, setBar] = useState(false)
  const handleClickBar = () => {
    setBar(!bar)
  }
  return (
    <div>
      <div className={`${styles.main} ${isContent ? styles.mainContent : null}`}>
        <div className={styles.left}>
          {isContent ? <img src={LogoLosAngeles} alt="logo" /> : <img src={Logo} alt="logo" />}
        </div>
        <div onClick={handleClickBar} className={styles.bar}>
          <FaBars size={20} color='#414f6b' />
        </div>

        <div className={`${styles.right} ${isContent ? styles.nonHero : null}`}>
          <div style={{ cursor: 'pointer' }} onClick={handleClick} id='history'>01. HISTORY</div>
          <div style={{ cursor: 'pointer' }} onClick={handleClick} id='team'>02. TEAM</div>
        </div>

      </div>
      <div style={bar ? { display: 'inline' } : { display: 'none' }} >
        <div className={`${styles.rightBar} ${styles.nonHero}`}>
          <div style={{ cursor: 'pointer', borderBlockEnd:'#414f6b 1px solid' , width:'100%',textAlign:'center' }} onClick={handleClick} id='history'>01. HISTORY</div>
          <div style={{ cursor: 'pointer' , width:'100%',textAlign:'center' }} onClick={handleClick} id='team'>02. TEAM</div>
        </div>
      </div>
    </div>
  )
}

export default Header