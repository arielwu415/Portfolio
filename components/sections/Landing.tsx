import React from 'react';
import styles from '../../styles/components/sections/Section.module.scss'

export default function Landing() {
    return (
        <section className={styles.section}>
            <div className={styles.welcome_msg}>
                <h4>Hello;</h4>
                <span>I'm Ariel Wu. Computer Science Major. Illustrator.</span>
            </div>
        </section>
    )
}