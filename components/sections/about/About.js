import React, { useEffect, useRef } from 'react'
import styles from '../../../styles/components/sections/About.module.scss'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import Education from './about components/Education'
import Bio from './about components/Bio'
import Interest from './about components/Interest'
import Language from './about components/Language'
import Technology from './about components/Technology'

gsap.registerPlugin(ScrollTrigger)

export default function About({ language }) {

    let section = useRef(null)

    useEffect(() => {
        // gsap.fromTo(section, {
        //     y: 0
        // }, {
        //     scrollTrigger: {
        //         trigger: section,
        //         start: "top bottom",
        //         // end: "bottom center",
        //         scrub: true,
        //     },
        //     y: -500,
        //     ease: "linear",
        // })
    })
    return (
        <section className={styles.section} ref={el => section = el}>
            <div className={styles.section_container}>
                <div className={styles.container}>
                    {/*Left elements*/}
                    <div className={styles.content}>
                        <h1 className={styles.section_title}>About Me</h1>
                        <div className={styles.intro}>
                            <code>Hi, my name is Ariel Wu. I'm from Taiwan, based in LA.<br /></code>
                        </div>
                        <div className={styles.grid}>

                            <Education />
                            <Language language={language} />
                            <Bio />
                            <Technology />
                            <Interest />

                        </div>
                    </div>
                    {/*Right elements*/}
                    {/* <div className={styles.right}>
                        <img src="./toonme.jpg" height="500" className={styles.figure} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}