import React, { useCallback } from 'react'
import { DangerButton } from './DangerButton/DangerButton'
import styles from './EntrySection.module.css'

interface Props {
    date: string
    templateName: string
    text: string

    onDeleteClick: (entryDate: string, templateName: string) => void
}

export const EntrySection: React.FC<Props> = props => {
    const { date, onDeleteClick, templateName, text } = props

    const handleDeleteClick = useCallback(() => {
        onDeleteClick(date, templateName)
    }, [date, onDeleteClick, templateName])

    return (
        <section className={styles.container}>
            <article className={styles.entry}>
                <header className={styles.header}>
                    <h2 className={styles.heading}>{date || 'No entry selected'}</h2>
                    <DangerButton
                        className={styles.btnAdjust}
                        disabled={!date}
                        onCLick={handleDeleteClick}
                        text={'Delete entry'}
                    />
                </header>
                <hr className={styles.hr} />
                <div className={styles.content}>{text}</div>
            </article>
        </section>
    )
}
