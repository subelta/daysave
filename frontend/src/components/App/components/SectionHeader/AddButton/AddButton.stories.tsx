/* eslint-disable no-console */
import React from 'react'
import { AddButton } from './AddButton'
import styles from './AddButton.module.css'


export default { title: 'AddButton' }

const handleClick = (): void => console.log('handle click')

export const Basic: React.FC = () => (
    <AddButton onClick={handleClick} text={'Add new item'} />
)

export const Disabled: React.FC = () => (
    <AddButton disabled={true} onClick={handleClick} text={'Add new item'} />
)

export const CustomStyle: React.FC = () => (
    <AddButton
        className={styles.storybook}
        onClick={handleClick}
        text={'Add new item'}
    />
)
