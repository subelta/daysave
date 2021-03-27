import React, { useCallback } from 'react'
import { pickThemedClassName } from 'Utils/themes'
import { v4 as uuid } from 'uuid'

import { Entry } from '../../../../types'
import { EntryPreview } from './EntryPreview/EntryPreview'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './EntriesSection.module.css'

interface EntriesSectionProps {
    previewEntries: Entry[]
    templateName: string
    theme: string

    onChooseClick: (entryDate: string) => void
    onDeleteCLick: (entryDate: string, templateName: string) => void
}

export const EntriesSection: React.FC<EntriesSectionProps> = props => {
    const { onChooseClick, onDeleteCLick, previewEntries, templateName, theme } = props

    const handleClick = useCallback(() => undefined, [])

    return (
        <section className={`${styles.container} ${pickThemedClassName(styles, theme)}`}>
            <div className={styles.entriesContainerGridArea}>
                <SectionHeader
                    headingText={`${templateName} entries`}
                    buttonText={'New Entry'}
                    onClick={handleClick}
                />
                <ul className={styles.entriesList}>
                    {previewEntries.map(obj => (
                        <li key={uuid()}>
                            <EntryPreview
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
