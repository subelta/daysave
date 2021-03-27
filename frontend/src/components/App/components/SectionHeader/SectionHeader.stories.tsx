import React from 'react'
import { SectionHeader } from './SectionHeader'

export default { title: 'SectionHeader' }

const handleClick = (): void => undefined

export const Default = (): JSX.Element => (
    <SectionHeader buttonText={'Add new item'} headingText={'Items'} onClick={handleClick} />
)
