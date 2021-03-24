import React, {useCallback, useEffect, useState} from 'react'

import styles from './App.module.css'
import { EntriesSection } from './components/EntriesSection/EntriesSection'
import { Entry } from './components/EntrySection/Entry'
import { TemplatesSection } from './components/TemplatesSection/TemplatesSection'
import { AccountLink } from './components/AccountLink/AccountLink'
import { Template } from './types'
// TODO auto spaces when auto import
// TODO alphabetic imports
// TODO something about strict null check ain't right
// TODO warn about missing deps

const PATH_TO_DATA = 'public/data/data.json'
const EMPTY_ARR = []

export const App: React.FC = () => {
    const [data, setData] = useState<Template[]>([])
    const [currentTemplate, setCurrentTemplate] = useState<string>('')
    const [currentEntry, setCurrentEntry] = useState<string>('')

    const handleChooseTemplate = useCallback((template: string) => {
        setCurrentTemplate(template)
    }, [])

    const handleDeleteTemplate = useCallback((template: string) => {
        const newData = data.filter(items => items.name !== template)

        setData(newData)
        setCurrentTemplate(newData[0]?.name || '')
        setCurrentEntry(newData[0]?.entries[0]?.date || '')
    }, [currentTemplate, currentEntry, data])

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
                    onChoseClick={handleChooseTemplate}
                    onDeleteCLick={handleDeleteTemplate}
                    templates={templates}
                />
            </section>
            <EntriesSection
                previewEntries={entries}
                templateName={currentTemplate || ''}
            />
            <Entry entryDate={currentEntry || 'No entry selected'} entryText={entryText} />
        </main>
    )
}
