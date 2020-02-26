import React from 'react'
import styles from './App.module.css'

interface AppProps {
    text: string
}

export const App = React.memo<AppProps>(props => {

    console.log('hey biatch');

    return (
        <div className={styles.app}>
            <h1>Hello, I am a freshly DIY-configured React, {props.text}</h1>
            <p>Testing github apps output</p>
            <p>Travis CI</p>
        </div>
    )
});
