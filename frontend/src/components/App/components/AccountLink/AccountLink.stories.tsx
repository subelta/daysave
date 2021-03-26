import React from 'react'

import { AccountLink } from './AccountLink'
import styles from './AccountLink.module.css'

export default { title: 'AccountLink' }

export const basic = (): JSX.Element => <AccountLink />

export const customStyle = (): JSX.Element => <AccountLink className={styles.storybook} />
