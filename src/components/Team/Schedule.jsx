import React from 'react'

import styles from '../../styles/Schedule.module.css'
function Schedule({dates}) {
  return (
    <div className={styles.main}>
        <h1 className={styles.h1}>SCHEDULE</h1>
        <div className={styles.schedule}>
            {dates.map((item ,index)=>
                (item? <div key={index} className={styles.item}>
                    <p>{item}</p>
                    <p>Vestibulum viverra</p>
                </div> :
                <div key={index} className={styles.item}></div>)
            )}
        </div>
    </div>
  )
}

export default Schedule