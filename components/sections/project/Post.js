import React from 'react'
import styles from '../../../styles/components/sections/Project.module.scss'

export default function Post({ post }) {

    const project = post.frontmatter

    return (
        <div className={styles.post}>
            <div className={styles.img_container}>
                <img src={project.cover_image} alt='' />
            </div>
            <div className={styles.title}>
                <h3>{project.title}</h3>
                <span>{project.semester}</span>
            </div>
            <div className={styles.description}>
                <span>{project.excerpt}</span>
            </div>
        </div>
    )
    
}