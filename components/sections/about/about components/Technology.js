import React from "react"
import styles from "../../../../styles/components/sections/About.module.scss"

export default function Technology() {
    var tools = ["GitHub", "Firebase", "JDBC", "PostgreSQL", "MS Access", "AWS"]
    var frameworks = ["React", "Next.js", "GSAP"]
    var multimedias = [
        "Figma",
        "Illustrator",
        "Photoshop",
        "Procreate",
        "SAI",
        "Premiere Pro",
    ]

    return (
        <div className={styles.about_component} id={styles.technology}>
            <h3>
                <span>Technologies</span>
            </h3>
            <div className={styles.item_content}>
                <h4>Tools</h4>
                <div className={styles.all_items}>
                    {tools.map((tool, index) => (
                        <div className={styles.item} key={index}>
                            <div>{tool}</div>
                        </div>
                    ))}
                </div>
                <h4>Frameworks / Libraries</h4>
                <div>
                    {frameworks.map((framework, index) => (
                        <div className={styles.item} key={index}>
                            <div>{framework}</div>
                        </div>
                    ))}
                </div>
                <h4>Design</h4>
                <div>
                    {multimedias.map((multimedia, index) => (
                        <div className={styles.item} key={index}>
                            <div>{multimedia}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
