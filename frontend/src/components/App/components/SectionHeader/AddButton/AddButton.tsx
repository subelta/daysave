import React from 'react'

import styles from './AddButton.module.css'
import addIcon from '../../../../../media/add-icon.svg'

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
            <img alt={'plus icon'} src={addIcon}/>
            <span>{text}</span>
        </button>
    )
}
