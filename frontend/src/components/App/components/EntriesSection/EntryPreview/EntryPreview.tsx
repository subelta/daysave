import React from 'react'

import styles from './EntryPreview.module.css'
import 'StyleSettings/styleSettings.css'

export interface EntryPreviewProps {
    date: string
    imgUrl?: string
    text: string
}

export const EntryPreview: React.FC<EntryPreviewProps> = props => {
    const { date, imgUrl, text } = props

    return (
        <article className={styles.entryPreview}>
            {imgUrl ? <img src={imgUrl} alt={'Entry preview'} /> : ''}
            <section className={styles.textSection}>
                <h3>{date}</h3>
                <p>{text}</p>
            </section>
        </article>
    )
}
