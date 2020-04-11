import React from 'react'
import styles from './AccountLink.module.css'
import { AccountLink } from './AccountLink'

export default { title: 'AccountLink' }

export const basic = () => <AccountLink/>

export const customStyle = () => <AccountLink className={styles.storybook} />
