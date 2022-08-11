import Bold from "./Bold"
export default function IncomeListItem({income,...rest}) {
  return (
    <div
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        backgroundColor : "#F6F6F6",
        margin : "0 15px 15px 15px",
        width: "140px",
        height:"140px",
    }}
    {...rest}
    >

        <Bold>2022.07.21</Bold>
        <Bold>월정급여</Bold>
        <Bold>2,000,000원</Bold>
    </div>
  )
}
