import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Technology() {

    var tools = ["GitHub", "Firebase", "JDBC", "PostgreSQL", "MS Access"]
    var frameworks = ["React", "Next.js", "GSAP"]
    var design = ["Adobe Illustrator", "Figma", "Procreate", "SAI"]

    return (
        <div className={styles.about_item}>
            <h3><span>Technologies</span></h3>
            <div className={styles.item_content}>
                <h4>Tools</h4>
                <div className={styles.all_items}>
                    {tools.map(tool => (

                        <div className={styles.item}>{tool}</div>

                    ))}
                </div>
            </div>
        </div>
    )
}