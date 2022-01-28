import React from 'react';
import styles from '../../styles/components/sections/Section.module.scss'

export default function Landing() {
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.welcome_msg}>
                    <h2>Hello, I'm Ariel Wu;</h2>
                    <span> Computer Science Student & Illustrator.</span>
                </div>
                <img src="./gray.svg" className={styles.far} alt="" />
                <img src="./brown.svg" className={styles.mid} alt="" />
                <img src="./blue.svg" className={styles.close} alt="" />
            </div>
        </section>
    )
}