import React, {useCallback} from 'react'
import { v4 as uuid } from 'uuid'

import PencilIcon from 'Media/pencil.component.svg'
import TrashIcon from 'Media/trash.component.svg'
import styles from './TemplatesSection.module.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { ThemesEnum } from '../../../../enums/themes'

interface Template {
    name: string
    theme: ThemesEnum
}

export const TemplatesSection: React.FC<{ templates: Template[] }> = props => {
    const { templates } = props

    const handleClick = useCallback(() => undefined, [])

    return (
        <section className={styles.container}>
            <SectionHeader headingText={'Templates'} buttonText={'New template'} onClick={handleClick} />
            <ul className={styles.templatesList}>
                {templates.map(template => (
                    <li key={uuid()}>
                        <button className={styles.templateBtn}>
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
