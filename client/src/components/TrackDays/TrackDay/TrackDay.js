import React from 'react'
import styles from './TrackDay.module.css'

function TrackDay({ trackday }) {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.cell}>{trackday.date}</div>
            <div className={styles.cell}>{trackday.car}</div>
            <div className={styles.cell}>{trackday.location}</div>
            <div className={styles.cellLast}>{trackday.team}</div>
        </div>
    )
}

export default TrackDay
