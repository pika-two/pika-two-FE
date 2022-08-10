export default function IncomeListItem({income,...rest}) {
  return (
    <div
    style={{
        display : "flex",
        flexDirection : "column",
        backgroundColor : "#F6F6F6",
        margin : "0 10px 10px 10px"
    }}
    {...rest}
    >

        <div>2022.07.21</div>
        <div>월정급여</div>
        <div>2,000,000원</div>
    </div>
  )
}
