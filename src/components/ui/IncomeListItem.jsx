import Bold from "./Bold"
export default function IncomeListItem({income,selected,...rest}) {
  return (
    <Div
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        backgroundColor : selected?'#FC0':"#F6F6F6",
        borderRadius : "20px"
    }}
    {...rest}
    >

        <Bold>{income.date}</Bold>
        <Bold>{income.memo}</Bold>
        <Bold>{income.amount}원</Bold>
    </div>
  )
}

const Div = styled.div`
  margin : 0 15px 15px 15px;
  width: 140px;
  height:140px;
  &:hover{
    
    background: #faeaac;
  }
`;