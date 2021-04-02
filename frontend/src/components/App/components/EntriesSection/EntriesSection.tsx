import React, { useCallback } from 'react'
import { pickThemedClassName } from 'Utils/themes'

import { Entry } from '../../../../types'
import { EntryPreview } from './EntryPreview/EntryPreview'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './EntriesSection.module.css'

interface EntriesSectionProps {
    currentEntry: string
    previewEntries: Entry[]
    templateName: string
    theme: string

    onChooseClick: (entryDate: string) => void
    onDeleteCLick: (entryDate: string, templateName: string) => void
}

export const EntriesSection: React.FC<EntriesSectionProps> = props => {
    const { currentEntry, onChooseClick, onDeleteCLick, previewEntries, templateName, theme } = props

    const handleClick = useCallback(() => undefined, [])

    return (
        <section className={`${styles.container} ${pickThemedClassName(styles, theme)}`}>
            <div className={styles.entriesContainerGridArea}>
                <SectionHeader
                    headingText={`${templateName} entries`}
                    buttonText={'New entry'}
                    onClick={handleClick}
                />
                <ul className={styles.entriesList}>
                    {previewEntries.map(obj => (
                        <li key={`${templateName}-${obj.date}`}>
                            <EntryPreview
                                isSelected={currentEntry === obj.date}
                                onChooseClick={onChooseClick}
                                onDeleteCLick={onDeleteCLick}
                                templateName={templateName}
                                {...obj}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
