import React, { useCallback } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/navbars/Navbar.module.scss'

export default function Navbar({ scrollToAbout, scrollToProject }) {

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
                            <li onClick={() => handleScrollToAbout()}>
                                About
                            </li>
                            <li onClick={() => handleScrollToProject()}>
                                    Projects
                            </li>
                            <li>
                                <Link href="https://github.com/arielwu415">
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                Contact
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </header >
    )
}