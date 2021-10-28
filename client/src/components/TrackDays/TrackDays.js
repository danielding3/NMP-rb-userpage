import styles from './TrackDays.module.css'
import React, { useState }   from 'react'
import TrackDay from './TrackDay/TrackDay.js'
import CardPlaceholder from '../CardPlaceholder/CardPlaceholder'
import { v4 as uuidv4 } from 'uuid'
import TrackDayHeader from './TrackDay/TrackDayHeader'


const TrackDays = () => {   
  const [showTrackDays, setShowTrackDays] = useState(false)
  const trackdays = [
    {
      'date' : '2021-10-08',
      'car' : 'RB21-E',
      'location' : 'SMSP',
      'team' : 'Redback Racing'
    }, 
    {
      'date' : '2021-10-09',
      'car' : 'Lightning Mcqueen',
      'location' : 'Piston Cup',
      'team' : 'Kachow Team'
    }
  ]

  const trackdays_map = trackdays.map(trackday => (<TrackDay key={uuidv4()} trackday={trackday}/>))
  const trackDayVisibilityHandler = () => {
    setShowTrackDays(true)
  }

  return <div className={styles.root}>
    <div className={styles.container}>
      <h2>upcoming track days</h2>   
        {showTrackDays ? 
          <div>
            <TrackDayHeader/>
            {trackdays_map}
          </div> : 
            <CardPlaceholder displayText="trackday" visibilityHandler={trackDayVisibilityHandler}/>}
    </div>
  </div>
}

export default TrackDays;