import React from 'react'

import styles from './EntryPreview.module.css'
import TrashIcon from 'Media/trash.component.svg'

export interface EntryPreviewProps {
    date: string
    text: string
}

export const EntryPreview: React.FC<EntryPreviewProps> = props => {
    const { date, text } = props

    return (
        <button className={styles.containerBtn} title={date}>
            <span className={styles.block}>
                <span className={styles.header}>
                    <span className={styles.heading}>{date}</span>
                    <TrashIcon className={styles.trash} />
                </span>
                <span className={styles.description}>{text}</span>
            </span>
        </button>
    )
}
