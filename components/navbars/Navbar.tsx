import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/navbars/Navbar.module.scss'

export default function Navbar() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.nav_elements}>
                    <div className={styles.title}>Ariel Wu.</div>
                    <div className={styles.right_elements}>
                        <ul className={styles.nav_links}>
                            <li>
                                About
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                GitHub
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