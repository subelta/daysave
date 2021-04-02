import React, { useCallback } from 'react'
import { v4 as uuid } from 'uuid'

import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Template } from './Template'
import { TemplateSimple } from '../../../../types'
import { getParentsAttribute } from 'Utils/dom'
import styles from './TemplatesSection.module.css'
import templateStyles from './Template.module.css'

interface Props {
    currentTemplate: string
    templates: TemplateSimple[]

    onChooseClick: (templateName: string) => void
    onDeleteCLick: (templateName: string) => void
}

export const TemplatesSection: React.FC<Props> = props => {
    const { currentTemplate, onChooseClick, onDeleteCLick, templates } = props

    const handleAddClick = useCallback(() => undefined, [])

    const handleClick = useCallback(e => {
        const template = getParentsAttribute(e.target, 'LI', 'data-template')

        if (
            e.target.classList.contains(templateStyles.trash) ||
            e.target.parentElement.classList.contains(templateStyles.trash)
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
                        <Template currentTemplate={currentTemplate} template={template} handleClick={handleClick} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
