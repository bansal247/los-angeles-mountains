import React from 'react'

import Background from '../assets/PeakBackground.png'
import styles from '../styles/History.module.css'
import HeadText from '../components/History/HeadText'
import Carousel from '../components/History/Carousel'

function History({ref1}) {
  return (
    <div ref={ref1} className={styles.main} style={{backgroundImage: `url(${Background})`}}>
        <div className={styles.textContent}>
          <HeadText/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
        </div>
        <div className={styles.carousel}> 
          <Carousel/>
        </div>
    </div>
  )
}

export default History