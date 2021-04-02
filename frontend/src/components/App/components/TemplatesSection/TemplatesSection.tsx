import React, { useCallback } from 'react'

import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Template } from './Template/Template'
import { TemplateSimple } from '../../../../types'
import { ThemesEnum } from '../../../../enums/themes'
import styles from './TemplatesSection.module.css'

interface Props {
    currentTemplate: string
    templates: TemplateSimple[]

    onChooseClick: (templateName: string) => void
    onDeleteCLick: (templateName: string) => void
    onSaveClick: (newName: string, prevName: string, theme: ThemesEnum) => void
}

export const TemplatesSection: React.FC<Props> = props => {
    const { currentTemplate, onChooseClick, onDeleteCLick, onSaveClick, templates } = props

    const handleAddClick = useCallback(() => undefined, [])

    return (
        <section className={styles.container}>
            <SectionHeader headingText={'Templates'} buttonText={'New template'} onClick={handleAddClick} />
            <ul className={styles.templatesList}>
                {templates.map((template) => (
                    <li key={template.name}>
                        <Template
                            currentTemplate={currentTemplate}
                            template={template}
                            onChooseClick={onChooseClick}
                            onDeleteCLick={onDeleteCLick}
                            onSaveClick={onSaveClick}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
