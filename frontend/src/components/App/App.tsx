import React, { useEffect, useState } from 'react'

import styles from './App.module.css'
import { EntriesSection } from './components/EntriesSection/EntriesSection'
import { Entry } from './components/EntrySection/Entry'
import { TemplatesSection } from './components/TemplatesSection/TemplatesSection'
import { AccountLink } from './components/AccountLink/AccountLink'
import { testFunc } from 'Utils/test'
import { Template } from './types'
// TODO auto spaces when auto import
// TODO alphabetic imports

const PATH_TO_DATA = 'public/data/data.json'
const EMPTY_ARR = Object.freeze([])

export const App = React.memo(() => {
    const [data, setData] = useState<Template[]>([])

    useEffect(() => {
        fetch(PATH_TO_DATA)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(console.error)
    }, []) // TODO warn about no deps

    const templates = data.map(({ name, theme }) => ({ name, theme }))

    return (
        <main className={styles.app}>
            <section className={styles.leftColumn}>
                <AccountLink className={styles.accountLink} />
                <TemplatesSection templates={templates} />
            </section>
            <EntriesSection
                previewEntries={data[0]?.entries || EMPTY_ARR}
                templateName={data[0]?.name || 'No template selected'}
            />
            <Entry
                entryHeading={data[0]?.entries[0]?.date || 'No entry selected'}
                entryText={data[0]?.entries[0]?.text || ''}
            />
        </main>
    )
})
