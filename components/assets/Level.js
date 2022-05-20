import React from 'react'
import styles from './styles/Level.module.scss'

export const Level = ({ percentage }) => {
    var width = percentage*100 + "%"
    return (
        <div className={styles.level_container}>
            <div style={{ width: width }} className={styles.upper}>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
            </div>
            <div className={styles.lower}>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
            </div>
        </div>
    )
}