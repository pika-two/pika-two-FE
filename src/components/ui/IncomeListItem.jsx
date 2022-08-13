import Bold from "./Bold"
export default function IncomeListItem({income,selected,...rest}) {
  return (
    <div
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        backgroundColor : selected?'#FC0':"#F6F6F6",
        margin : "0 15px 15px 15px",
        width: "140px",
        height:"140px",
    }}
    {...rest}
    >

        <Bold>{income.date}</Bold>
        <Bold>{income.memo}</Bold>
        <Bold>{income.amount}원</Bold>
    </div>
  )
}
