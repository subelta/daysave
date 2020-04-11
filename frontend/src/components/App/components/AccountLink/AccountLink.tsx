import React from 'react'

import styles from './AccountLink.module.css'

interface Props {
    className?: string
}

export const AccountLink: React.FC<Props> = props => {
    const { className } = props

    return (
        <section className={`${styles.accountLink} ${className || ''}`}>
            <span className={styles.guestIcon}>G</span>
            <h2 className={styles.user}>Guest</h2>
        </section>
    )
}
