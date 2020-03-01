import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
    heading: string
    buttonText: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = props => {
    const { buttonText, heading } = props

    return (
        <header className={styles.sectionHeader}>
            <h2>{heading}</h2>
            <button>{buttonText}</button>
        </header>
    )
}
