import React from "react"
import Link from 'next/link'
import styles from "./styles/Dropdown.module.scss"


export const Dropdown = ({ links }) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {links.map((link, index) => (
                    <div className={styles.list_item}>
                        <Link href={link.frontmatter.link}>
                            <span>
                                {link.frontmatter.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}