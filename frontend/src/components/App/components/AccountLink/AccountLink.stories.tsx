import React from 'react'

import { AccountLink } from './AccountLink'
import styles from './AccountLink.module.css'

export default { title: 'AccountLink' }

export const basic = () => <AccountLink/>

export const customStyle = () => <AccountLink className={styles.storybook} />
