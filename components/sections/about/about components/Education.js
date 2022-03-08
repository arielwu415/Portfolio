import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Education() {
    return (
        <div className={styles.about_component} id={styles.education}>
            <h3><span>Education</span></h3>
            <div className={styles.item_content}>
                <div className={styles.school}>
                    <img src="./cpp.png" height="45" className={styles.figure} alt="" />
                    <div>
                        <span>California State Polytechnic University, Pomona<br /></span>
                        <span>Bachelor of Science - Computer Science<br /></span>
                        <span className={styles.school_year}>Aug 2020 - Expected Aug 2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
