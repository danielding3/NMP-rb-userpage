import React from 'react'
import styles from './Car.module.css'

function Car({car}) {
    return (
        <div> 
            <div className={styles.carCard}>
                <img className={styles.cardImg} src={car.image} alt={car.imageAlt}/>
                <div className={styles.carTitle}>{car.name}</div>
                <div className={styles.carTeam}>{car.team}</div>
            </div>
        </div>

        
    )
}

export default Car
