import React from 'react'

import PencilIcon from 'Media/pencil.component.svg'
import { TemplateSimple } from '../../../../types'
import TrashIcon from 'Media/trash.component.svg'
import { pickThemedClassName } from 'Utils/themes'
import styles from './Template.module.css'

interface Props {
    currentTemplate: string
    template: TemplateSimple

    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Template: React.FC<Props> = props => {
    const { currentTemplate, template, handleClick } = props

    return (
        <button
            className={
                `${styles.templateBtn} ${currentTemplate === template.name ? styles.selected : ''}`
            }
            onClick={handleClick}
        >
            <span className={styles.templateInfo}>
                <span
                    className={`${styles.colorSquare} ${pickThemedClassName(styles, template.theme)}`}
                />
                <span className={styles.templateName}>
                    {template.name}
                </span>
            </span>
            <span>
                <PencilIcon className={styles.pencil} />
                <TrashIcon className={styles.trash} />
            </span>
        </button>
    )
}
