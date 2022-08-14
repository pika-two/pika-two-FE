import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import IncomeList from '../components/Composition/IncomeList';
import { useState } from 'react';
import Message from '../components/ui/message';
export default function IncomeListPage () {
  const dummyData = [{
      'date' : '2022-07-21',
      'amount' : 1500000,
      'memo' : '월정급여'
    },
    {
      'date' : '2022-07-10',
      'amount' : 300000,
      'memo' : 'OOO 입금'
    },
    {
      'date' : '2022-07-10',
      'amount' : 100000,
      'memo' : '보너스'
    },
    {
      'date' : '2022-07-01',
      'amount' : 20000,
      'memo' : '중고거래'
    },
    {
      'date' : '2022-06-21',
      'amount' : 1500000,
      'memo' : '월정급여'
    },
    {
      'date' : '2022-06-16',
      'amount' : 20000,
      'memo' : '환급'
    },
    {
      'date' : '2022-06-17',
      'amount' : 20000,
      'memo' : 'OOO 입금'
    },
    {
      'date' : '2022-07-01',
      'amount' : 20000,
      'memo' : 'OOO 입금'
    },
    {
      'date' : '2022-06-11',
      'amount' : 1500000,
      'memo' : '보너스'
    },
]
   const {goBack,push} = useInternalRouter();
   const [incomes, setIncomes]  = useState(dummyData);
   const [selectedIncomeNameList, setSelectedIncomeNameLIst] = useState([]);
   const handleChange = function(event,name){
        setSelectedIncomeNameLIst(prev => prev.indexOf(name) === -1?[...prev,name]:[...prev].filter(item=>item !== name))
   }
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="급여내역 선택"/>
        <div style={{
          margin : "40px 30px"
        }}>
          <Message>
            최근 3개월간 입금내역 중<br/>
            급여로 추정되는 내역입니다.<br/>
            급여에 해당되는 내역을 선택해주세요.
          </Message>
          <div style={{
            margin : "30px 0"
          }}>
            {/* //TODO High : axios만 남음*/}
            <IncomeList selectedIncomeNameList={selectedIncomeNameList} handleClickevent={handleChange} incomes ={incomes}></IncomeList>
          </div>
        </div>
        <FixedBottomButton style={{
            display : selectedIncomeNameList.length ? 'block' : 'none'
        }} onClick={()=>{push('/incomeConnect')}} background="#FFCC00">연동하기</FixedBottomButton>
    </div>
  )
}
