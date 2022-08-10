import IncomeListItem from '../ui/IncomeListItem'
export default function IncomeList({incomes,...rest}) {
  return (
    <div style={{
        display : "grid",
        gridTemplateColumns : "auto auto",
        marginTop : "16px"
    }}>
      {incomes.map((income,index) => <IncomeListItem income={income} key={index} {...rest}/>)}
    </div>
  )
}
