import React, { useCallback } from 'react'

import styles from './SectionHeader.module.css'
import { AddButton } from './AddButton/AddButton'

interface Props {
    buttonText: string
    heading: string
    light?: boolean

    onClick: () => void
}

export const SectionHeader: React.FC<Props> = props => {
    const { buttonText, heading, onClick } = props

    const handleClick = useCallback(() => {
        onClick()
    }, [onClick])

    return (
        <header className={styles.container}>
            <h2>{heading}</h2>
            <AddButton onClick={handleClick} text={buttonText} />
        </header>
    )
}
