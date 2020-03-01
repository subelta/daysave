import React from 'react'
import styles from './Entry.module.css'

interface Entry {
    entryHeading: string
    entryText: string
}

export const Entry: React.FC<Entry> = props => {
    const { entryHeading, entryText } = props

    return (
        <section className={styles.entrySection}>
            <article className={styles.entry}>
                <header>
                    <h2>{entryHeading}</h2>
                </header>
                {/*TODO maybe section or div?*/}
                <p>{entryText}</p>
            </article>
        </section>
    )
}
