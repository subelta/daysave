import React from 'react'

import styles from './App.module.css'
import { EntriesSection } from './components/EntriesSection/EntriesSection'
import { Entry } from './components/EntrySection/Entry'
import { TemplatesSection } from './components/TemplatesSection/TemplatesSection'
import { AccountLink } from './components/AccountLink/AccountLink'
import { testFunc } from 'Utils/test'

export const App = React.memo(() => {
    const templateNames = [
        { color: 'red', name: 'Food log' },
        { color: 'lightcoral', name: 'Health log' },
        { color: 'teal', name: 'Ideas log' },
        { color: 'green', name: 'Food log' }
    ]

    const templateName = 'Food log'

    const previewEntries = [
        {
            date: '1 mar',
            imgUrl: 'jih',
            text: 'drtfgh gyuuhjoiy'
        },
        {
            date: '29 feb',
            text: 'drtsd hjoiy'
        },
        {
            date: '28 feb',
            text: 'hj ihkj lik'
        },
        {
            date: '27 feb',
            text: 'fyjguhjk b gjh lk'
        },
    ]

    const entryHeading = '1 mar'

    const entryText = '' +
        'breakfast: porridge;' +
        'lunch: chicken with pasta and beans, tomatoes;' +
        'dinner: buckwheat with salad and pork, one beer'

    return (
        <main className={styles.app}>
            <section className={styles.leftColumn}>
                <AccountLink className={styles.accountLink}/>
                <TemplatesSection templateNames={templateNames} />
            </section>
            <EntriesSection previewEntries={previewEntries} templateName={templateName}/>
            <Entry entryHeading={entryHeading} entryText={entryText} />
        </main>
    )
})
