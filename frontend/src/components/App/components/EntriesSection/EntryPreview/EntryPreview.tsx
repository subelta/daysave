import React, { useCallback } from 'react'

import TrashIcon from 'Media/trash.component.svg'
import styles from './EntryPreview.module.css'

export interface EntryPreviewProps {
    date: string
    templateName: string
    text: string

    onChooseClick: (entryDate: string) => void
    onDeleteCLick: (entryDate: string, templateName: string) => void
}

export const EntryPreview: React.FC<EntryPreviewProps> = props => {
    const { date, onChooseClick, onDeleteCLick, templateName, text } = props

    const handleClick = useCallback(e => {
        if (e.target.classList.contains(styles.trash)) {
            onDeleteCLick(date, templateName)
        } else {
            onChooseClick(date)
        }
    }, [date, onChooseClick, onDeleteCLick, templateName])

    return (
        <button className={styles.containerBtn} title={date} onClick={handleClick}>
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
