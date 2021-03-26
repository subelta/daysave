import React from 'react'
import styles from './Entry.module.css'

interface Entry {
    date: string
    text: string
}

export const Entry: React.FC<Entry> = props => {
    const { date, text } = props

    return (
        <section className={styles.entrySection}>
            <article className={styles.entry}>
                <h2>{date}</h2>
                <div>{text}</div>
            </article>
        </section>
    )
}
