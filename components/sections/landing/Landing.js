import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/components/sections/Landing.module.scss'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

export default function Landing() {

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
    let greeting = useRef(null)
    let close = useRef(null)

    useEffect(() => {
        tl.fromTo(greeting, { y: 50, opacity: 0 }, { duration: 0.7, y: 0, opacity: 1 })
        // gsap.to(close, {
        //     scrollTrigger: {
        //         trigger: close,
        //         start: "top top",
        //         end: "bottom 100px",
        //         scrub: 1,
        //         markers: true
        //     },
        //     y: -100
        // })
        // gsap.to('.mid', {
        //     scrollTrigger: {
        //         trigger: '.mid',
        //         start: 'top top',
        //         end: 'bottom 100px',
        //         scrub: true,
        //         markers: true
        //     },
        //     y: -200
        // })
        // gsap.to('.far', {
        //     scrollTrigger: {
        //         trigger: '.far',
        //         start: 'top top',
        //         end: 'bottom 100px',
        //         scrub: true,
        //         markers: true
        //     },
        //     y: -300
        // })
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.welcome_msg} ref={el => greeting = el}>
                    <div className={styles.img_container}>
                        <div>
                            <img src="./character_bg.png" className={styles.figure} alt="" />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <h2>Hello, I'm Ariel Wu;</h2>
                        <span> Computer Science Student & Illustrator.</span>
                    </div>
                </div>
                <img src="./gray.svg" className={styles.far} alt="" />
                <img src="./brown.svg" className={styles.mid} alt="" />
                <img src="./blue.svg" className={styles.close} alt="" ref={el => close = el} />
            </div>
        </section>
    )
}