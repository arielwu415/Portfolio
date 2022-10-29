import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/navbars/Navbar.module.scss'
import { Dropdown } from '../assets/Dropdown';

export default function Navbar({ links, scrollToAbout, scrollToProject }) {

    const [open, setOpen] = useState(false)

    const handleOpenDropdown = () => {
        console.log("Dropdown menu open")
        setOpen(true)
    }
    const handleCloseDropdown = () => {
        console.log("Dropdown menu closed")
        setOpen(false)
    }
    const toggleDropdown = () => {
        setOpen(op => {
            console.log("Toggle " + !op)
            return !op
        })
    }

    const handleScrollToAbout = useCallback(() => {
        scrollToAbout()
        handleCloseDropdown()
    })
    const handleScrollToProject = useCallback(() => {
        scrollToProject()
        handleCloseDropdown()
    })

    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.nav_elements}>
                    <div className={styles.title}>
                        <Link href={{ pathname: "/" }}>
                            Ariel Wu.
                        </Link>
                    </div>
                    <div className={styles.right_elements}>
                        <ul className={styles.nav_links}>
                            <li className={styles.link_item} onClick={handleScrollToProject}>
                                <span className={styles.span_item}>
                                    Projects
                                </span>
                            </li>
                            <li className={styles.link_item} onClick={handleScrollToAbout}>
                                <span className={styles.span_item}>
                                    About
                                </span>
                            </li>
                            <li className={styles.link_item} onClick={handleOpenDropdown}>
                                <span className={styles.span_item}>
                                    Links
                                </span>
                            </li>
                            <li className={styles.link_item}>
                                <span className={styles.span_item}>
                                    <a
                                        href="./pdf/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    Resume</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    open &&
                    <Dropdown links={links} closeDropdown={handleCloseDropdown} />
                }
            </nav>

        </header >
    )
}