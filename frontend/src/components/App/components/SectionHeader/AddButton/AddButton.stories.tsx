/* eslint-disable no-console */
import React from 'react'
import { AddButton } from './AddButton'
import styles from './AddButton.module.css'


export default { title: 'AddButton' }

const handleClick = (): void => console.log('handle click')

export const basic: React.FC = () => {
    return <AddButton onClick={handleClick} text={'Add new item'} />
}

export const light: React.FC = () => {
    return <AddButton light={true} onClick={handleClick} text={'Add new item'}/>
}

export const disabled: React.FC = () => {
    return <AddButton disabled={true} onClick={handleClick} text={'Add new item'} />
}

export const customStyle: React.FC = () => {
    return (
        <AddButton
            className={styles.storybook}
            onClick={handleClick}
            text={'Add new item'}
        />
    )
}
