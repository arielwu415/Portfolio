import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Bio() {
    return (
        <div className={styles.about_component} id={styles.bio}>
            <h3><span>Bio</span></h3>
            <div className={styles.item_content}>
                <div className={styles.bio}>
                    <div className={styles.year}>1997</div>
                    <div>
                        Born in Taiwan, Taipei.
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2015</div>
                    <div>
                        Major in Digital Technology Design at National Taipei University of Education.
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2017</div>
                    <div>
                        Moved to the United States. Started studying at Mt. SAC.
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2020 - Now</div>
                    <div>Studying computer science at Cal Poly Pomona.</div>
                </div>
            </div>
        </div>
    )
}