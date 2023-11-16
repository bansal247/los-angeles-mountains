import React from 'react'

import styles from '../../styles/HeadText.module.css'
function HeadText({number='01.',text='HISTORY'}) {
  return (
    <div className={styles.main}>
        <h1>{number}</h1>
        <p>{text}</p>
    </div>
  )
}

export default HeadText