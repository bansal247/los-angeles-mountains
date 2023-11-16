import React from 'react'

import styles from '../styles/Footer.module.css'
import LogoLosAngeles from '../assets/LogoLosAngelesColoured.png'
function Footer() {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
        <img src={LogoLosAngeles} alt="logo" />
        </div>
        <div className={styles.right}>
        <div>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
        </div>
    </div>
  )
}

export default Footer