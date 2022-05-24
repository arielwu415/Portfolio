import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/navbars/Navbar.module.scss'

export default function Navbar() {
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
                            <li>
                                About
                            </li>
                            <li>
                                <Link href={{ pathname: "/project" }}>
                                    Projects
                                </Link>
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
        </header>
    )
}