export default function AccountListItem({account,...rest}) {
  const {account_id, account_name, account_number, bank_name, amount} = account;
  return (
    (
        <div style={{
            display : "flex",
            padding : "10px 0px"
        }} {...rest}>
    
            <img width={80} height = {80} src="https://play-lh.googleusercontent.com/K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E" alt=""/>
            <div style={{
                display : "flex",
                flexDirection : "column",
                width : "100%",
            }}>
                <div>{account_name}</div>
                <div>{account_number}</div>
                <div>{amount}</div>
            </div>
        </div>
    )
  )
}
