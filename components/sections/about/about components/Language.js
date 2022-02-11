import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Language({ language }) {
    return (
        <div className={styles.about_item}>
            <h3><span>Languages</span></h3>
            <div className={styles.item_content}>
                {language.map(l => (
                    <div className={styles.language}>
                        <div>{l.frontmatter.name}</div>
                        <div className={styles.level}>{l.frontmatter.level}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}