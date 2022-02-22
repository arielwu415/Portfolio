import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Bio() {
    return (
        <div className={styles.about_item}>
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
                        Studied in National Taipei University of Education. <br />
                        Major in Digital Technology Design.
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2017</div>
                    <div>
                        Moved to the United States. Started studying at Mt. SAC.
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2020 - Present</div>
                    <div>Studying computer science at Cal Poly Pomona.</div>
                </div>
            </div>
        </div>
    )
}