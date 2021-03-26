import React, { useCallback } from 'react'
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
    templates: Template[]
    onChoseClick: (template: string) => void
    onDeleteCLick: (template: string) => void
}

export const TemplatesSection: React.FC<Props> = props => {
    const { onChoseClick, onDeleteCLick, templates } = props

    const handleAddClick = useCallback(() => undefined, [])

    const handleChooseClick = useCallback(e => {
        const template = getParentsAttribute(e.target, 'LI', 'data-template')

        if (e.target.classList.contains(styles.trash)) {
            onDeleteCLick(template)
        } else {
            onChoseClick(template)
        }
    }, [onChoseClick, onDeleteCLick])

    return (
        <section className={styles.container}>
            <SectionHeader headingText={'Templates'} buttonText={'New template'} onClick={handleAddClick} />
            <ul className={styles.templatesList}>
                {templates.map(template => (
                    <li data-template={template.name} key={uuid()}>
                        <button className={styles.templateBtn} onClick={handleChooseClick}>
                            <span className={styles.templateInfo}>
                                <span className={styles.colorSquare} style={{ background: template.theme }} />
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
