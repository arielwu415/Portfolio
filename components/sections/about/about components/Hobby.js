import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Hobby() {
    return (
        <div className={styles.about_item}>
            <h3><span>I ♥</span></h3>
            <div className={styles.item_content}>
                <span>Art, Drawing, Badminton, Boba, Animals</span>
            </div>
        </div>
    )
}