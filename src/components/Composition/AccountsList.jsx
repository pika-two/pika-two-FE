
import AccountListItem from '../ui/AccountListItem'
export default function AccountsList({accounts,...rest}) {
  return (
    accounts.map(account => <AccountListItem key={account.account_id} account={account} {...rest}/>)
  )
}
