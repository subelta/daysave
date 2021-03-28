import React, { useCallback } from 'react'
import { pickThemedClassName } from 'Utils/themes'
import { v4 as uuid } from 'uuid'

import PencilIcon from 'Media/pencil.component.svg'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { ThemesEnum } from '../../../../enums/themes'
import TrashIcon from 'Media/trash.component.svg'
import { getParentsAttribute } from 'Utils/dom'
import styles from './TemplatesSection.module.css'

interface Template {
    name: string
    theme: ThemesEnum
}

interface Props {
    currentTemplate: string
    templates: Template[]

    onChooseClick: (templateName: string) => void
    onDeleteCLick: (templateName: string) => void
}

export const TemplatesSection: React.FC<Props> = props => {
    const { currentTemplate, onChooseClick, onDeleteCLick, templates } = props

    const handleAddClick = useCallback(() => undefined, [])

    const handleClick = useCallback(e => {
        const template = getParentsAttribute(e.target, 'LI', 'data-template')

        if (
            e.target.classList.contains(styles.trash) ||
            e.target.parentElement.classList.contains(styles.trash)
        ) {
            onDeleteCLick(template)
        } else {
            onChooseClick(template)
        }
    }, [onChooseClick, onDeleteCLick])

    return (
        <section className={styles.container}>
            <SectionHeader headingText={'Templates'} buttonText={'New template'} onClick={handleAddClick} />
            <ul className={styles.templatesList}>
                {templates.map(template => (
                    <li data-template={template.name} key={uuid()}>
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
                    </li>
                ))}
            </ul>
        </section>
    )
}
