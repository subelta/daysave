import React from 'react'
import styles from './TemplatesSection.module.css'

export const TemplatesSection: React.FC = () => {
    return (
        <section className={'templates'}>
            <div>
                {/*TODO h1 or h2*/}
                <h2>Templates</h2>
                <button className={'new-template'}>New template</button>
            </div>
            <ul className={'templates-list'}>
                <li className={'template'}></li>
            </ul>
        </section>
    )
}
