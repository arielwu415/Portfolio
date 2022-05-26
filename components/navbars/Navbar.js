import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/navbars/Navbar.module.scss'
import { Dropdown } from '../assets/Dropdown';

export default function Navbar({ links, scrollToAbout, scrollToProject }) {

    const [open, setOpen] = useState(false)
    const handleDropdown = () => {
        setOpen(op => {
            return !op
        })
    }

    const handleScrollToAbout = useCallback(() => {
        scrollToAbout()
    })
    const handleScrollToProject = useCallback(() => {
        scrollToProject()
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
                            <li className={styles.link_item} onClick={handleScrollToAbout}>
                                <span>
                                    About
                                </span>
                            </li>
                            <li className={styles.link_item} onClick={handleScrollToProject}>
                                <span>
                                    Projects
                                </span>
                            </li>
                            <li className={styles.link_item} onClick={handleDropdown}>
                                <span>
                                    Links
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    open &&
                    <Dropdown links={links} />
                }
            </nav>

        </header >
    )
}