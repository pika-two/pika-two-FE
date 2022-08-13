import IncomeListItem from '../ui/IncomeListItem'
export default function IncomeList({incomes,selectedIncomeNameList,handleClickevent,...rest}) {
  return (
    <div style={{
        display : "grid",
        gridTemplateColumns : "auto auto",
        marginTop : "16px"
    }}>
      {incomes.map((income,index) => <IncomeListItem income={income} selected={selectedIncomeNameList.indexOf(income.memo) !== -1}  onClick={(e)=>handleClickevent(e,income.memo)} key={index} {...rest}/>)}
    </div>
  )
}
