import React from 'react'
import styles from './AddCard.module.css'
import { IconContext} from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"

function AddCard({ displayText }) {
    return (
        <div className={styles.root}>
            
            <button className={styles.addButton}> 
                <IconContext.Provider 
                    value={{color: '#2457F0', size: '50px'}}
                >
                    <AiOutlinePlus />
                </IconContext.Provider>
                <div className={styles.root}>
                    Add new {displayText} 
                </div>
            </button>
        </div>
    )
}
export default AddCard
