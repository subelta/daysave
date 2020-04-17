import React from 'react'

import styles from './AddButton.module.css'
import addIcon from '../../../../../media/add-icon.svg'

interface Props {
    className?: string
    disabled?: boolean
    light?: boolean
    text: string

    onClick: () => void
}

export const AddButton: React.FC<Props> = props => {
    const { className = '', disabled = false, light = false, onClick, text} = props

    const classes = `${light ? styles.light : styles.dark} ${className}`

    return (
        <button disabled={disabled} className={classes} onClick={onClick}>
            <img alt={'plus icon'} src={addIcon}/>
            <span>{text}</span>
        </button>
    )
}
