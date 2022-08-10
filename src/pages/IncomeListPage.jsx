import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import Text from '../components/ui/Text';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import IncomeList from '../components/Composition/IncomeList';
import { useState } from 'react';
import { useEffect } from 'react';
export default function IncomeListPage () {
   const {goBack,push} = useInternalRouter();
   const [incomes, setIncomes]  = useState([]);
   useEffect(()=>{
    setIncomes([0,0,0,0,0])
   },[])
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>{goBack()}}/>} title="급여내역 선택"/>
        <div style={{
          margin : "0 30px"
        }}>
          <Text>
            최근 3개월간 입금내역 중
            급여로 추정되는 내역입니다.
            급여에 해당되는 내역을 선택해주세요.
          </Text>
          <div>

            <IncomeList onClick={()=>{alert('안녕')}} incomes ={incomes}></IncomeList>
          </div>
        </div>
        <FixedBottomButton onClick={()=>{push('/incomeConnect')}} background="#FFCC00">연동하기</FixedBottomButton>
    </div>
  )
}
