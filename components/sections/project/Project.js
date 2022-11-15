import React, { useEffect, useRef } from "react"
import Link from "next/link"
import Post from "./Post"
import styles from "../../../styles/components/sections/Project.module.scss"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Project({ posts }) {
    let projects = useRef(null)

    useEffect(() => {
        const projectPost = projects.children
        gsap.fromTo(
            projectPost,
            {
                y: 50,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: projects,
                    start: "top 75%",
                    toggleActions: "restart complete none reverse",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
            }
        )
    })

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <h1 className={styles.section_title}>Projects</h1>
                <div
                    className={styles.project_container}
                    ref={(el) => (projects = el)}
                >
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
                <div className={styles.see_more_button}>
                    <Link href={{ pathname: "/project" }}>
                        {"▶ See All Projects"}
                    </Link>
                </div>
            </div>
        </section>
    )
}
