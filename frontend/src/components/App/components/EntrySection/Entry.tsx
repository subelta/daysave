import React from 'react'
import styles from './Entry.module.css'

interface Entry {
    entryDate: string
    entryText: string
}

export const Entry: React.FC<Entry> = props => {
    const { entryDate, entryText } = props

    return (
        <section className={styles.entrySection}>
            <article className={styles.entry}>
                <h2>{entryDate}</h2>
                <div>{entryText}</div>
            </article>
        </section>
    )
}
