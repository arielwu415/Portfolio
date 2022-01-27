import React from 'react';
import styles from '../../styles/components/sections/Section.module.scss'

export default function Landing() {
    return (
        <section className={styles.section}>
            <div className={styles.main_container}>
                <h4>Hello;</h4>
                <span>I'm Ariel Wu. Computer Science Major. Illustrator.</span>
            </div>
        </section>
    )
}