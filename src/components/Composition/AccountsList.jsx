
import AccountListItem from '../ui/AccountListItem'
export default function AccountsList({accounts,handleClickevent,selected,...rest}) {

  return (
    accounts.map(account => <AccountListItem selected={account.account_id === selected} key={account.account_id} onClick={(e)=>handleClickevent(e,account.account_id)} account={account} {...rest}/>)
  )
}
