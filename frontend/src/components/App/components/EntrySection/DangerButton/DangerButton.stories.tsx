import React from 'react'

import { DangerButton } from './DangerButton'

export default { title: 'DangerButton' }

// eslint-disable-next-line no-console
const handleClick = () => console.log('clicked')

export const Default = (): JSX.Element => (
    <DangerButton text={'Delete something'} onCLick={handleClick} />
)

export const Disabled = (): JSX.Element => (
    <DangerButton disabled={true} text={'Delete something'} onCLick={handleClick} />
)

export const ClassName = (): JSX.Element => (
    <DangerButton className={'mock_whatever'} text={'Delete something'} onCLick={handleClick} />
)
