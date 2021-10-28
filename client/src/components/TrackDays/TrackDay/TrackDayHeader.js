import React from 'react'
import styles from './TrackDay.module.css'

function TrackDayHeader() {
    return (
        <div className={styles.gridContainer}>
            <div className={` ${styles.cell} ${styles.bold}`}>Date</div>
            <div className={` ${styles.cell} ${styles.bold}`}>Vehicle</div>
            <div className={` ${styles.cell} ${styles.bold}`}>Location</div>
            <div className={` ${styles.cellLast} ${styles.bold}`}>Team</div>
        </div>
    )
}

export default TrackDayHeader
