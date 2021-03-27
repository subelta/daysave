import React from 'react'

import TrashIcon from 'Media/trash.component.svg'
import styles from './DangerButton.module.css'

interface Props {
    className?: string
    disabled?: boolean
    text: string

    onCLick: () => void
}

export const DangerButton: React.FC<Props> = props => {
    const { className = '', disabled = false, onCLick, text } = props

    return (
        <button className={`${styles.btn} ${className}`} disabled={disabled} onClick={onCLick}>
            <TrashIcon className={styles.trash} />
            <span>{text}</span>
        </button>
    )
}
