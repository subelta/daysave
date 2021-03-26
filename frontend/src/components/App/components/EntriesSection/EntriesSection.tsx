import React, { useCallback } from 'react'
import { v4 as uuid } from 'uuid'

import { Entry } from '../../types'
import { EntryPreview } from './EntryPreview/EntryPreview'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './EntriesSection.module.css'

interface EntriesSectionProps {
    templateName: string
    previewEntries: Entry[]

    onChooseClick: (entryDate: string) => void
    onDeleteCLick: (entryDate: string, templateName: string) => void
}

export const EntriesSection: React.FC<EntriesSectionProps> = props => {
    const { onChooseClick, onDeleteCLick, previewEntries, templateName } = props

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
                        <EntryPreview
                            key={uuid()}
                            onChooseClick={onChooseClick.bind(undefined, obj.date)}
                            onDeleteCLick={onDeleteCLick.bind(undefined, obj.date, templateName)}
                            {...obj}
                        />)
                    )}
                </ul>
            </div>
        </section>
    )
}
