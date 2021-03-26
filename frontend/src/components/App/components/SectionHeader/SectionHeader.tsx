import React, { useCallback } from 'react'

import { AddButton } from './AddButton/AddButton'
import styles from './SectionHeader.module.css'

interface Props {
    buttonText: string
    headingText: string
    light?: boolean

    onClick: () => void
}

export const SectionHeader: React.FC<Props> = props => {
    const { buttonText, headingText, onClick } = props

    const handleClick = useCallback(() => {
        onClick()
    }, [onClick])

    return (
        <header className={styles.container}>
            <h2 className={styles.heading}>{headingText}</h2>
            <AddButton className={styles.btn} onClick={handleClick} text={buttonText} />
        </header>
    )
}
