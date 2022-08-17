import React from 'react'
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import Top02 from '../components/ui/Top/Top02';
import Bold from '../components/ui/Bold';
import DotList from '../components/ui/DotList';
import Stack from '../components/ui/Stack';
import { useParams } from 'react-router-dom';
import useWage from '../hooks/useWage';
export default function SalaryListPage() {
    const {goBack} = useInternalRouter();
    const {id : company_id, year} = useParams();
    const {wageInfo, isLoading, isError} = useWage(company_id,year)
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="연봉정보"/>
        <Top02>기업 이름</Top02>
        <Bold>1년차</Bold>
        <Stack>
          {isLoading?'':wageInfo.map((item,index) => <DotList key={index} middle={item.nickname} amount={parseInt(item.wage/10000)}></DotList>)}
        </Stack>
        
    </div>
  )
}
