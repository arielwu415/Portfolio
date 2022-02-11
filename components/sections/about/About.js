import React from 'react'
import styles from '../../../styles/components/sections/About.module.scss'

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1 className={styles.section_title}>About Me</h1>
                        <div className={styles.content}>
                            <div className={styles.intro}>
                                <code>Hi, my name is Ariel Wu. I'm from Taiwan, based in LA.<br /></code>
                            </div>
                            <div className={styles.about_item}>
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
                            <div className={styles.about_item}>
                                <h3><span>Languages</span></h3>
                                <div className={styles.item_content}>
                                    
                                </div>
                            </div>
                            <div className={styles.about_item}>
                                <h3><span>I ♥</span></h3>
                                <div className={styles.item_content}>
                                    <span>Art, Drawing, Badminton, Boba, Animals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src="./character_bg.png" height="500" className={styles.figure} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}