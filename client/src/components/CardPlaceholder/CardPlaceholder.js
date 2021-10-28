import React from 'react'
import styles from './CardPlaceholder.module.css'

function CardPlaceholder({ visibilityHandler, displayText }) {
    return (
        <div className={styles.root}>
            <p className={styles.cardPlaceholder}>
                There are no {displayText}s to display. <span onClick={visibilityHandler} className={styles.textLink}> Create a new {displayText}. </span>
            </p>
        </div>
    )
}

export default CardPlaceholder
