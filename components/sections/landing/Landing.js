import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/components/sections/Landing.module.scss'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {

    const tl = gsap.timeline({ defaults: {} })
    let greeting = useRef(null)
    let close = useRef(null)
    let mid = useRef(null)
    let far = useRef(null)

    useEffect(() => {
        tl.fromTo(greeting, { y: 50, opacity: 0 }, { duration: 0.7, y: 0, opacity: 1, ease: "power1.out" })
        gsap.fromTo(close, {
            y: 0
        }, {
            scrollTrigger: {
                trigger: close,
                start: "top top",
                scrub: 1,
            },
            y: -50,
            opacity: 0.3,
            ease: "power3.out",
        })
        gsap.fromTo(mid, {
            y: 0
        }, {
            scrollTrigger: {
                trigger: mid,
                start: 'top top',
                scrub: 1,
            },
            y: -100,
            opacity: 0.3,
            ease: "power3.out",
        })
        gsap.fromTo(far, {
            y: 0
        }, {
            scrollTrigger: {
                trigger: '.far',
                start: 'top top',
                scrub: 1,
            },
            y: -150,
            opacity: 0.3,
            ease: "power3.out",
        })
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
                <img src="./landing/gray-1.svg" className={styles.far} alt="" ref={el => far = el} />
                <img src="./landing/brown-1.svg" className={styles.mid} alt="" ref={el => mid = el} />
                <img src="./landing/blue-1.svg" className={styles.close} alt="" ref={el => close = el} />
            </div>
        </section>
    )
}