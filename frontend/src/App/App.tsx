import React from 'react'
import styles from './App.module.css'

import { EntriesSection } from './EntriesSection/EntriesSection'
import { EntrySection } from './EntrySection/EntrySection'
import { TemplatesSection } from './TemplatesSection/TemplatesSection'
import { AccountLink } from './AccountLink/AccountLink'

export const App = React.memo(() => {
    return (
        <main className={styles.app}>
            <section className={styles.leftColumn}>
                <AccountLink />
                <TemplatesSection />
            </section>
            <EntriesSection />
            <EntrySection />
        </main>
    )
})
