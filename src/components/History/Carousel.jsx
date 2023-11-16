import React from 'react'

import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import styles from '../../styles/Carousel.module.css'
function Carousel() {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.images}>
                <img src={Image1} alt="Image1"/>
                <img src={Image2} alt="Image2"/>
                <img src={Image1} alt="Image1"/>
                <img src={Image2} alt="Image2"/>
            </div>
            <div className={styles.ellipse}>
                <div className={styles.dot}></div>
                <div className={styles.dot} style={{opacity:0.5}}></div>
            </div>
        </div>
    </div>
  )
}

export default Carousel