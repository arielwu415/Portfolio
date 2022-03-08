import React from 'react'
import styles from '../../../../styles/components/sections/About.module.scss'

export default function Technology() {

    var tools = ["GitHub", "Firebase", "JDBC", "PostgreSQL", "MS Access"]
    var frameworks = ["React", "Next.js", "GSAP"]
    var multimedias = ["Figma", "Illustrator", "Photoshop", "Procreate", "SAI", "Premiere Pro"]

    return (
        <div className={styles.about_component} id={styles.technology}>
            <h3><span>Technologies</span></h3>
            <div className={styles.item_content}>
                <h4>Tools</h4>
                <div className={styles.all_items}>
                    {tools.map(tool => (
                        <div className={styles.item}>
                            <div>{tool}</div>
                        </div>
                    ))}
                </div>
                <h4>Frameworks / Libraries</h4>
                <div>
                    {frameworks.map(framework => (
                        <div className={styles.item}>
                            <div>{framework}</div>
                        </div>
                    ))}
                </div>
                <h4>Multimedia</h4>
                <div>
                    {multimedias.map(multimedia => (
                        <div className={styles.item}>
                            <div>{multimedia}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}