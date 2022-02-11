import React, { useEffect, useRef } from 'react'
import styles from '../../../styles/components/sections/About.module.scss'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import Education from './about components/Education'
import Bio from './about components/Bio'
import Hobby from './about components/Hobby'
import Language from './about components/Language'

gsap.registerPlugin(ScrollTrigger)

export default function About({ language }) {

    let section = useRef(null)

    useEffect(() => {
        gsap.fromTo(section, {
            y: 0
        }, {
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                scrub: true,
            },
            y: -300,
            ease: "linear"
        })
    })
    return (
        <section className={styles.section} ref={el => section = el}>
            <div className={styles.section_container}>
                <div className={styles.container}>
                    {/*Left elements*/}
                    <div className={styles.left}>
                        <h1 className={styles.section_title}>About Me</h1>
                        <div className={styles.content}>
                            <div className={styles.intro}>
                                <code>Hi, my name is Ariel Wu. I'm from Taiwan, based in LA.<br /></code>
                            </div>

                            <Education />
                            <Bio />
                            <Language language={language} />
                            <Hobby />
                            
                        </div>
                    </div>
                    {/*Right elements*/}
                    <div className={styles.right}>
                        <img src="./character_bg.png" height="500" className={styles.figure} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}