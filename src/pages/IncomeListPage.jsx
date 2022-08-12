import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import IncomeList from '../components/Composition/IncomeList';
import { useState } from 'react';
import { useEffect } from 'react';
import Message from '../components/ui/message';
export default function IncomeListPage () {
   const {goBack,push} = useInternalRouter();
   const [incomes, setIncomes]  = useState([]);
   useEffect(()=>{
    setIncomes([0,0,0,0,0])
   },[])
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
            {/* //TODO High : 선택 시 체크 되는 표시를 나타내는 css 필요 */}
            {/* //TODO High : 선택된 데이터들을 저장해서 관리하는 로직 필요, axios 요청 보내기 위한 용도*/}
            <IncomeList onClick={()=>{alert('안녕')}} incomes ={incomes}></IncomeList>
          </div>
        </div>
        {/* //TODO High : 선택된 데이터들이 하나도 없을 시 경고 문구 및 맞는지 확인 창 선택된 적요 axios 요청 */}
        <FixedBottomButton onClick={()=>{push('/incomeConnect')}} background="#FFCC00">연동하기</FixedBottomButton>
    </div>
  )
}
