import React from 'react'
import Post from './Post'
import styles from '../../../styles/components/sections/Project.module.scss'

export default function Project({ posts }) {
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <h1 className={styles.section_title}>Projects</h1>
                <div className={styles.project_container}>
                    {posts.map((post, index) => (
                        <Post post={post} />
                    ))}
                </div>

            </div>
        </section>
    )
}