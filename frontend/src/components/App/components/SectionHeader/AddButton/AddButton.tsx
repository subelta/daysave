import React from 'react'

import addIcon from '../../../../../media/plus.svg'
import styles from './AddButton.module.css'

interface Props {
    className?: string
    disabled?: boolean
    text: string

    onClick: () => void
}

export const AddButton: React.FC<Props> = props => {
    const { className = '', disabled = false, onClick, text} = props

    return (
        <button disabled={disabled} className={`${styles.button} ${className}`} onClick={onClick}>
            <img alt={'plus icon'} src={addIcon} />
            <span>{text}</span>
        </button>
    )
}
