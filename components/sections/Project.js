import React from 'react'
import styles from '../../styles/components/sections/Project.module.scss'

export default function Project({ posts }) {
    console.log
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                {posts.map((post, index) => (
                    <h3>{post.frontmatter.title}</h3>
                ))}
            </div>
        </section>
    )
}