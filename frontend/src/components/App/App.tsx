import React, { useCallback, useEffect, useState } from 'react'

import { AccountLink } from './components/AccountLink/AccountLink'
import { EntriesSection } from './components/EntriesSection/EntriesSection'
import { Entry } from './components/EntrySection/Entry'
import { EntryPreviewProps } from './components/EntriesSection/EntryPreview/EntryPreview'
import { Template } from './types'
import { TemplatesSection } from './components/TemplatesSection/TemplatesSection'
import styles from './App.module.css'

const PATH_TO_DATA = 'public/data/data.json'
const EMPTY_ARR: EntryPreviewProps[] = []

export const App: React.FC = () => {
    const [data, setData] = useState<ReadonlyArray<Template>>([])
    const [currentTemplate, setCurrentTemplate] = useState<string>('')
    const [currentEntry, setCurrentEntry] = useState<string>('')

    const handleChooseTemplate = useCallback((template: string) => {
        setCurrentTemplate(template)
        setCurrentEntry(data.find(item => item.name === template)?.entries[0]?.date || '')
    }, [data])

    const handleDeleteTemplate = useCallback((templateName: string) => {
        const newData = data
            .filter(template => template.name !== templateName)
            .map(template => ({
                ...template,
                entries: template.entries.map(entry => ({ ...entry }))
            }))

        setData(newData)
        setCurrentTemplate(newData[0]?.name || '')
        setCurrentEntry(newData[0]?.entries[0]?.date || '') // TODO make typescript guard this
    }, [data])

    useEffect(() => {
        fetch(PATH_TO_DATA)
            .then(response => response.json())
            .then(parsedData => {
                setData(parsedData)
                setCurrentTemplate(parsedData[0]?.name || '')
                setCurrentEntry(parsedData[0]?.entries[0]?.date || '')
            })
            .catch(console.error)
    }, [])

    const templates = data.map(({ name, theme }) => ({ name, theme }))
    const entries = data
        .find(item => item.name === currentTemplate)
        ?.entries || EMPTY_ARR
    const entryText = entries
        .find(entry => entry.date === currentEntry)
        ?.text || ''

    return (
        <main className={styles.app}>
            <section className={styles.leftColumn}>
                <AccountLink className={styles.accountLink} />
                <TemplatesSection
                    onChooseClick={handleChooseTemplate}
                    onDeleteCLick={handleDeleteTemplate}
                    templates={templates}
                />
            </section>
            <EntriesSection
                previewEntries={entries}
                templateName={currentTemplate || ''}
            />
            <Entry date={currentEntry || 'No entry selected'} text={entryText} />
        </main>
    )
}
