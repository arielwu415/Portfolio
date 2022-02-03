import React from 'react'
import styles from '../../styles/components/sections/Project.module.scss'

export default function Project({ posts }) {
    console.log
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <h1 className={styles.section_title}>Projects</h1>
                <div className={styles.project_container}>
                    {posts.map((post, index) => (
                        <div className={styles.post}>
                            <div className={styles.img_container}>
                                <img src={post.frontmatter.cover_image} alt='' />
                            </div>
                            <div className={styles.title}>
                                <h3>{post.frontmatter.title}</h3>
                                <span>{post.frontmatter.semester}</span>
                            </div>
                            <div className={styles.description}>
                                <span>{post.frontmatter.excerpt}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}