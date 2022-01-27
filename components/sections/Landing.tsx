import React from 'react';
import styles from '../../styles/components/sections/Section.module.scss'

export default function Landing() {
    return (
        <section className={styles.section}>
            <div className={styles.main_container}>
                <div className={styles.welcome_msg}>
                    <h2>Hello, I'm Ariel Wu;</h2>
                    <span> Computer Science Student & Illustrator.</span>
                </div>
            </div>
        </section>
    )
}