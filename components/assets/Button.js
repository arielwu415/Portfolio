import React from 'react'
import styles from './styles/Button.module.scss'
import Link from 'next/link'

export const Button = ({ text, background_color, color }) => {
    console.log(background_color)
    return (
        <div className={styles.button} style={{backgroundColor: background_color, color: color}}>
            <Link href='/project'>
                <a><span>{text}</span></a>
            </Link>
        </div>

    )
}