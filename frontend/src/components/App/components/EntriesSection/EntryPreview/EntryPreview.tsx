import React, { useCallback } from 'react'

import TrashIcon from 'Media/trash.component.svg'
import { getParentsAttribute } from 'Utils/dom'
import styles from './EntryPreview.module.css'

export interface EntryPreviewProps {
    date: string
    text: string

    onDeleteCLick: () => void
    onChooseClick: () => void
}

export const EntryPreview: React.FC<EntryPreviewProps> = props => {
    const { date, onChooseClick, onDeleteCLick, text } = props

    const handleClick = useCallback(e => {
        if (e.target.classList.contains(styles.trash)) {
            onDeleteCLick()
        } else {
            onChooseClick()
        }
    }, [onChooseClick, onDeleteCLick])

    // const handleClick = useCallback(e => {
    //     const template = getParentsAttribute(e.target, 'LI', 'data-entry')
    //
    //     if (e.target.classList.contains(styles.trash)) {
    //         onDeleteCLick(template)
    //     } else {
    //         onChooseClick(template)
    //     }
    // }, [onChooseClick, onDeleteCLick])

    return (
        <li data-entry={date}>
            <button className={styles.containerBtn} title={date} onClick={handleClick}>
                <span className={styles.block}>
                    <span className={styles.header}>
                        <span className={styles.heading}>{date}</span>
                        <TrashIcon className={styles.trash} />
                    </span>
                    <span className={styles.description}>{text}</span>
                </span>
            </button>
        </li>
    )
}
