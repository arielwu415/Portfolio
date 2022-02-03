import React from 'react'
import styles from '../../styles/components/sections/Project.module.scss'

export default function Project({ posts }) {
    console.log
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.project_container}>
                    {posts.map((post, index) => (
                        <div className={styles.post}>
                            <h3>{post.frontmatter.title}</h3>
                            <span>{post.frontmatter.semester}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}