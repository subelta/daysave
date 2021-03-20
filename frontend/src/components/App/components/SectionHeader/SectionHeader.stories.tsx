import React from 'react'
import { SectionHeader } from './SectionHeader'

export default { title: 'SectionHeader' }

const handleClick = (): void => undefined

export const basic = (): JSX.Element => (
    <SectionHeader buttonText={'Add new item'} headingText={'Items'} onClick={handleClick} />
)

export const light = (): JSX.Element => (
    <div style={{ background: '#363636', padding: '15px' }}>
        <SectionHeader buttonText={'Add new item'} headingText={'Items'} onClick={handleClick} />
    </div>
)
