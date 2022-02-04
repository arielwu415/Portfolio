import React from 'react'
import styles from '../../../styles/components/sections/Project.module.scss'

export default function Post({ post }) {
    return (
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
    )
}