import React, { useCallback, useEffect, useState } from 'react'
import { ThemesEnum } from '../../enums/themes'

import { AccountLink } from './components/AccountLink/AccountLink'
import { EntriesSection } from './components/EntriesSection/EntriesSection'
import { EntryPreviewProps } from './components/EntriesSection/EntryPreview/EntryPreview'
import { EntrySection } from './components/EntrySection/EntrySection'
import { Template } from '../../types'
import { TemplatesSection } from './components/TemplatesSection/TemplatesSection'
import styles from './App.module.css'

const PATH_TO_DATA = 'data/data.json'
const EMPTY_ARR: EntryPreviewProps[] = []

export const App: React.FC = () => {
    // eslint-disable-next-line max-len
    const [data, setData] = useState<ReadonlyArray<Template>>([]) // TODO split state. TemplatesSection rerenders when delete entry
    const [currentTemplate, setCurrentTemplate] = useState<string>('')
    const [currentEntry, setCurrentEntry] = useState<string>('')

    const handleChooseTemplate = useCallback((templateName: string) => {
        setCurrentTemplate(templateName)
        setCurrentEntry(data.find(item => item.name === templateName)?.entries[0]?.date || '')
    }, [data])

    const handleDeleteTemplate = useCallback((templateName: string) => {
        const newData = data
            .filter(template => template.name !== templateName)
            .map(template => ({
                ...template,
                entries: template.entries.map(entry => ({ ...entry }))
            }))

        setData(newData)
        if (currentTemplate === templateName) {
            setCurrentTemplate(newData[0]?.name || '')
            setCurrentEntry(newData[0]?.entries[0]?.date || '') // TODO make typescript guard this
        }
    }, [currentTemplate, data])

    const handleSaveTemplate = useCallback((newName: string, prevName: string, theme: ThemesEnum) => {
        const newData = data
            .map(template => ({
                entries: template.entries.map(entry => ({ ...entry })),
                name: template.name === prevName ? newName : template.name,
                theme: template.name === prevName ? theme : template.theme
            }))

        setData(newData)
        if (currentTemplate === prevName) {
            setCurrentTemplate(newName)
        }
    }, [currentTemplate, data])

    const handleChooseEntry = useCallback((entryDate) => {
        setCurrentEntry(entryDate)
    }, [])

    const handleDeleteEntry = useCallback((entryDate, templateName) => {
        const newData = data.map(template => ({
            ...template,
            entries: template.entries
                .map(entry => ({ ...entry }))
                .filter(entry => template.name !== templateName || entry.date !== entryDate)
        }))

        setData(newData)
        if (currentEntry === entryDate) {
            setCurrentEntry(newData.find(template => template.name === templateName)?.entries[0]?.date || '')
        }
    }, [currentEntry, data])

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
    const theme = data
        .find(template => template.name === currentTemplate)
        ?.theme || ''

    return (
        <main className={styles.app}>
            <section className={styles.leftColumn}>
                <AccountLink className={styles.accountLink} />
                <TemplatesSection
                    currentTemplate={currentTemplate}
                    onChooseClick={handleChooseTemplate}
                    onDeleteCLick={handleDeleteTemplate}
                    onSaveClick={handleSaveTemplate}
                    templates={templates}
                />
            </section>
            <EntriesSection
                currentEntry={currentEntry}
                onChooseClick={handleChooseEntry}
                onDeleteCLick={handleDeleteEntry}
                previewEntries={entries}
                templateName={currentTemplate || ''}
                theme={theme}
            />
            <EntrySection
                date={currentEntry || ''}
                onDeleteClick={handleDeleteEntry}
                templateName={currentTemplate}
                text={entryText}
            />
        </main>
    )
}
