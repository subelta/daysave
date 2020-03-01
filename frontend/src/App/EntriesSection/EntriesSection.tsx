import React from 'react'
import styles from './EntriesSection.module.css'

export const EntriesSection: React.FC = () => {
    return (
        <section className={styles.entriesSection}>
            <div>
                {/*TODO h1 or h2*/}
                <h2>Template entries</h2>
                <button className={'new-entry'}>New entry</button>
            </div>
            <ul className={'entries-list'}>
                <li className={'entry'}>
                    <article></article>
                </li>
            </ul>
        </section>
    )
}
