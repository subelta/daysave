import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from './TemplatesSection.module.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import 'StyleSettings/styleSettings.css'

interface TemplateName {
    name: string
    color: string
}

interface TemplatesSectionProps {
    templateNames: TemplateName[]
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = props => {
    const { templateNames } = props

    return (
        <section className={styles.templatesSection}>
            <SectionHeader heading={'Templates'} buttonText={'New template'}/>
            <ul className={styles.templatesList}>
                {templateNames.map(obj => (
                    <li className={styles.templateName} key={uuid()}>
                        <span className={styles.colorDot} style={{ background: obj.color }}/>
                        <span>{obj.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
