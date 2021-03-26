import React, { useCallback } from 'react'
import { v4 as uuid } from 'uuid'

import { EntryPreview, EntryPreviewProps } from './EntryPreview/EntryPreview'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './EntriesSection.module.css'

interface EntriesSectionProps {
    templateName: string
    previewEntries: EntryPreviewProps[]
}

export const EntriesSection: React.FC<EntriesSectionProps> = props => {
    const { previewEntries, templateName } = props

    const handleClick = useCallback(() => undefined, [])

    return (
        <section className={styles.container}>
            <div className={styles.entriesContainerGridArea}>
                <SectionHeader
                    headingText={`${templateName} entries`}
                    buttonText={'New Entry'}
                    onClick={handleClick}
                />
                <ul className={styles.entriesList}>
                    {previewEntries.map(obj => (
                        <li key={uuid()}>
                            <EntryPreview {...obj} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
