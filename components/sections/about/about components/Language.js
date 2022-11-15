import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'
import { Level } from '../../../assets/Level'

export default function Language({ language }) {
    return (
        <div className={styles.about_component} id={styles.language}>
            <h3><span>Languages</span></h3>
            <div className={styles.item_content}>
                {language.map((l, index) => (
                    <div className={styles.language} key={index}>
                        <div>
                            <div>{l.frontmatter.name}</div>
                            <div className={styles.level}>{l.frontmatter.level}</div>       
                        </div>
                        <Level percentage={l.frontmatter.percentage} /> 
                        
                    </div>
                ))}
            </div>
        </div>
    )
}