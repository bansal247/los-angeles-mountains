import React from 'react'

import Background from '../assets/HeroBackground.png'
import styles from '../styles/Hero.module.css'

function Hero({refHero}) {
  return (
    <div ref={refHero} className={styles.main} style={{backgroundImage: `url(${Background})`}}>

    </div>
  )
}

export default Hero