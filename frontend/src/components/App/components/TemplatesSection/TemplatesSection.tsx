import React, {useCallback} from 'react'
import { v4 as uuid } from 'uuid'

import styles from './TemplatesSection.module.css'
import { SectionHeader } from '../SectionHeader/SectionHeader'

interface TemplateName {
    name: string
    color: string
}

interface Props {
    templateNames: TemplateName[]
}

export const TemplatesSection: React.FC<Props> = props => {
    const { templateNames } = props

    const handleClick = useCallback(() => undefined, [])

    return (
        <section className={styles.container}>
            <SectionHeader headingText={'Templates'} buttonText={'New template'} onClick={handleClick} />
            <ul className={styles.templatesList}>
                {templateNames.map(obj => (
                    <li key={uuid()}>
                        <span className={styles.colorDot} style={{ background: obj.color }}/>
                        <span>{obj.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
