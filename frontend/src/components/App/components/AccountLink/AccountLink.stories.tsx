import React from 'react'
import styles from './AccountLink.module.css'
import { AccountLink } from './AccountLink'

export default { title: 'AccountLink' }

export const basic = (): JSX.Element => <AccountLink/>

export const customStyle = (): JSX.Element => <AccountLink className={styles.storybook} />
