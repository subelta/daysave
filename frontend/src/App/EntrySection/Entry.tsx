import React from 'react'
import styles from './Entry.module.css'

interface Entry {
    entryHeading: string
    entryText: string
}

export const Entry: React.FC<Entry> = props => {
    const { entryHeading, entryText } = props

    return (
        <section>
            <div className={styles.correctionalDiv}/>
            <article>
                <header>
                    <h2>{entryHeading}</h2>
                </header>
                {/*TODO is section nesessary?*/}
                <p>{entryText}</p>
            </article>
        </section>
    )
}
