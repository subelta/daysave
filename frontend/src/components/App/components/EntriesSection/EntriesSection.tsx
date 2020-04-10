import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from './EntriesSection.module.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { EntryPreview, EntryPreviewProps } from './EntryPreview/EntryPreview'
import 'StyleSettings/styleSettings.css'

interface EntriesSectionProps {
    templateName: string
    previewEntries: EntryPreviewProps[]
}

export const EntriesSection: React.FC<EntriesSectionProps> = props => {
    const { previewEntries, templateName } = props

    return (
        <section className={styles.entriesSection}>
            <div className={styles.entriesContainer}>
                <SectionHeader heading={`${templateName} entries`} buttonText={'New Entry'}/>
                <ul className={styles.entriesList}>
                    {previewEntries.map(obj => (
                        <li key={uuid()}>
                            <EntryPreview {...obj}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
