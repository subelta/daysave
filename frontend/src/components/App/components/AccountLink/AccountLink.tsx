import React from 'react'
import styles from './AccountLink.module.css'

interface AccountLinkProps {
    avatarUrl: string
    accountName: string
}

export const AccountLink: React.FC<AccountLinkProps> = props => {
    const { avatarUrl, accountName } = props

    return (
        <div className={styles.accountLink}>
            <img src={avatarUrl} alt={'account avatar'} />
            <span>{accountName}</span>
        </div>
    )
}
