
import AccountListItem from '../ui/AccountListItem'
export default function AccountsList({accounts,handleClickevent,selected,...rest}) {

  return (
    accounts?.map((account,index) => <AccountListItem selected={index === selected} key={index} onClick={(e)=>handleClickevent(e,index)} account={account} {...rest}/>)
  )
}
