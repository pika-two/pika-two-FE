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
import Blank from '../components/ui/Blank';
export default function SalaryListPage() {
    const {goBack} = useInternalRouter();
    const {id : company_id, year} = useParams();
    const {wageInfo, isLoading, isError} = useWage(company_id,year)
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="연봉정보"/>

        <Blank/>
        <div
        style = {{
          textAlign : "center",
          fontFamily: "three", 
          borderRadius: "15px",
          background: "#052257",
          color: "white",
          width: "70%",
          margin: "auto",
          fontSize: "20px",
          padding: "10px",
          marginTop: "30px"
        }}
        >현직자 1년차 실수령 연봉</div>
        <Blank/>
        <Top02>기업명 : 국민은행 </Top02>
        <div
        style = {{
          margin: "10px"
        }}>
          <Stack>
              {isLoading?'':wageInfo.map((item,index) => <DotList key={index} middle={item.nickname} amount={parseInt(item.wage/10000)}></DotList>)}
          </Stack>
        </div>
    </div>
  )
}
