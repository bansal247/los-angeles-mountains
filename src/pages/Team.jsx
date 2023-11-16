import React, { useState } from 'react'

import Background1 from '../assets/Peak1.png'
import Background2 from '../assets/Peak2.png'
import styles from '../styles/Team.module.css'
import HeadText from '../components/History/HeadText'
import Schedule from '../components/Team/Schedule'

function Team({ref2}) {
  const [active, setActive] = useState(true)
  const [background, setBackground] = useState(Background1)
  const [dates, setDates] = useState(
    [
      "25 Nov 2016",
      "28 Nov 2016",
      null,
      "18 Dec 2016",
      null,
      "7 Jan 2017"
  ]
  )
  const clickHandler = (e) => {
    if(e.target.id==="moutain1"){
      setActive(true)
      setBackground(Background1)
      setDates(
        [
          "25 Nov 2016",
          "28 Nov 2016",
          null,
          "18 Dec 2016",
          null,
          "7 Jan 2017"
      ]
      )
    }
    else if(e.target.id==="moutain2"){
      setActive(false)
      setBackground(Background2)
      setDates(
        [
          "17 Nov 2016",
          null,
          "13 Dec 2016",
          "28 Dec 2016",
          null,
          "9 Feb 2017"
      ]
      )
    }
  }
  return (
    <div ref={ref2} className={styles.main} style={{backgroundImage: `url(${background})`}}>
      <div style={{width:'100%',height:'8.2vh',backgroundColor:'white'}}></div>
      <div className={styles.textContent}>
          <HeadText number='02.' text='CLIMB'/>
          <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.  </p>
      </div>
      <div className={styles.mountainOptions}>
        <div onClick={clickHandler} id='moutain1' className={styles.option} style={active?{backgroundColor:'#b0b4be',color: '#414f6b'}:{color:'#b0b4be'}}>MOUNTAIN 1</div>
        <div onClick={clickHandler} id='moutain2' className={styles.option} style={!active?{backgroundColor:'#b0b4be',color: '#414f6b',marginLeft:'0'}:{color:'#b0b4be',marginLeft:'0'}}>MOUNTAIN 2</div>
      </div>
      <div className={styles.schedule } >
        <Schedule dates={dates}/>
      </div>
    </div>
  )
}

export default Team