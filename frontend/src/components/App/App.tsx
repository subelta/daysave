import React from 'react'
import styles from './App.module.css'

interface AppProps {
    text: string
}

export const App = React.memo<AppProps>(props => {

    return (
        <>
            <section>
                <div className={'account'}></div>
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
            </section>

            <section className={'entries'}>
                <div>
                    {/*TODO h1 or h2*/}
                    <h2>Template entries</h2>
                    <button className={'new-entry'}>New entry</button>
                </div>
                <ul className={'entries-list'}>
                    <li className={'entry'}>
                        <article></article>
                    </li>
                </ul>
            </section>

            <section>
                <article className={'entry'}>
                    <h2>Entry heading</h2>
                </article>
            </section>
        </>
    )
})
