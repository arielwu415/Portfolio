import React, { useEffect, useRef } from "react"
import styles from "../../../styles/components/sections/Landing.module.scss"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import KUTE from "kute.js"

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
    const tl = gsap.timeline({ defaults: {} })
    let greeting = useRef(null)
    let close = useRef(null)
    let mid = useRef(null)
    let far = useRef(null)

    let blob1 = useRef(null)
    let blob2 = useRef(null)

    useEffect(() => {
        tl.fromTo(
            blob1,
            { y: 150, opacity: 0 },
            { duration: 0.7, y: 0, opacity: 1, ease: "power1.out" }
        ).fromTo(
            greeting,
            { y: 50, opacity: 0 },
            { duration: 0.7, y: 0, opacity: 1, ease: "power1.out" },
            "-=0.7"
        )

        // Blob animation
        KUTE.fromTo(
            blob1,
            { path: blob1 },
            { path: blob2 },
            { duration: 2000, repeat: 999, yoyo: true }
        ).start()

        gsap.fromTo(
            close,
            {
                y: 0,
            },
            {
                scrollTrigger: {
                    trigger: close,
                    start: "top top",
                    scrub: 1,
                },
                y: -50,
                opacity: 0.3,
                ease: "power3.out",
            }
        )
        gsap.fromTo(
            mid,
            {
                y: 0,
            },
            {
                scrollTrigger: {
                    trigger: mid,
                    start: "top top",
                    scrub: 1,
                },
                y: -100,
                opacity: 0.3,
                ease: "power3.out",
            }
        )
        gsap.fromTo(
            far,
            {
                y: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".far",
                    start: "top top",
                    scrub: 1,
                },
                y: -150,
                opacity: 0.3,
                ease: "power3.out",
            }
        )
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div
                    className={styles.welcome_msg}
                    ref={(el) => (greeting = el)}
                >
                    <div className={styles.img_container}>
                        <div>
                            <img
                                src='./landing/character.png'
                                className={styles.figure}
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <h2>Hello, I'm Ariel Wu;</h2>
                        <span> Web Developer & Marketing Specialist. </span>
                    </div>
                </div>
                <svg
                    className={styles.blob}
                    id='visual'
                    viewBox='0 0 900 550'
                    width='900'
                    height='720'
                    overflow='hidden'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    version='1.1'
                >
                    <g transform='translate(432.76723371313483 312.4155713785696)'>
                        <path
                            ref={(el) => (blob1 = el)}
                            d='M171.1 -199C213.6 -168.2 234.3 -106.6 223.8 -55.8C213.3 -5 171.6 35 142 77.9C112.4 120.8 94.8 166.6 61.2 187C27.6 207.4 -22.1 202.3 -62.1 182.6C-102.2 162.9 -132.5 128.4 -156.3 89.2C-180.1 50 -197.4 6.1 -190.5 -33.7C-183.6 -73.5 -152.6 -109.1 -116.8 -141.2C-81 -173.2 -40.5 -201.6 11.9 -215.8C64.3 -229.9 128.6 -229.9 171.1 -199'
                            fill='#ffffff'
                        ></path>
                    </g>
                    <g
                        transform='translate(407.1474916947623 342.9436076566023)'
                        className={styles.blob2}
                    >
                        <path
                            ref={(el) => (blob2 = el)}
                            d='M158 -159.8C206.2 -109.8 247.6 -54.9 244.8 -2.8C241.9 49.3 194.9 98.5 146.7 129.9C98.5 161.2 49.3 174.6 7 167.6C-35.4 160.7 -70.7 133.4 -97.4 102C-124 70.7 -142 35.4 -152.2 -10.1C-162.3 -55.6 -164.6 -111.3 -137.9 -161.3C-111.3 -211.3 -55.6 -255.6 -0.4 -255.3C54.9 -254.9 109.8 -209.8 158 -159.8'
                            fill='none'
                        ></path>
                    </g>
                </svg>

                <img
                    src='./landing/gray-1.svg'
                    className={styles.far}
                    alt=''
                    ref={(el) => (far = el)}
                />
                <img
                    src='./landing/brown-1.svg'
                    className={styles.mid}
                    alt=''
                    ref={(el) => (mid = el)}
                />
                <img
                    src='./landing/blue-1.svg'
                    className={styles.close}
                    alt=''
                    ref={(el) => (close = el)}
                />
            </div>
        </section>
    )
}
