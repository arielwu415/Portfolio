import React from 'react'
import Link from 'next/link'
import styles from './Post.module.scss'

export default function Post({ post }) {

    const project = post.frontmatter
    const image = "./project/" + project.cover_image

    return (
        <Link href={`/project/${post.slug}`}>
            <div className={styles.post}>
                <div className={styles.img_container}>
                    <img src={image} alt='' />
                </div>
                <div className={styles.title}>
                    <h3>{project.title}</h3>
                    <span>{project.semester}</span>
                </div>
                <div className={styles.description}>
                    <span>{project.excerpt}</span>
                </div>
            </div>
        </Link>

    )

}