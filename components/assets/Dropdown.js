import React, { useCallback, useRef, useEffect } from "react"
import Link from "next/link"
import styles from "./styles/Dropdown.module.scss"

export const Dropdown = ({ links, closeDropdown }) => {
    let dropdownElement = useRef(null)

    const handleCloseDropdown = useCallback(
        (e) => {
            e.preventDefault()
            // If the dropdown medu does not contain what you click
            if (
                !dropdownElement.contains(e.target) &&
                !e.target.className.includes("Navbar_span_item") &&
                !e.target.className.includes("Navbar_nav")
            ) {
                closeDropdown()
            }
        },
        [closeDropdown]
    )

    useEffect(() => {
        console.log(links)
        document.addEventListener("mousedown", handleCloseDropdown)
        return () =>
            document.removeEventListener("mousedown", handleCloseDropdown)
    })

    return (
        <div className={styles.container} ref={(el) => (dropdownElement = el)}>
            <div className={styles.list}>
                {links.map((link, index) => (
                    <div className={styles.list_item}>
                        <Link key={index} href={link.frontmatter.link}>
                            <span>{link.frontmatter.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
