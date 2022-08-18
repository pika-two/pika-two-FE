import React, { useEffect } from 'react'
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import Top02 from '../components/ui/Top/Top02';
import DotList from '../components/ui/DotList';
import Stack from '../components/ui/Stack';
// TODO 정렬
import { useParams } from 'react-router-dom';
import useWage from '../hooks/useWage';
import Blank from '../components/ui/Blank';
export default function SalaryListPage() {
    const {goBack} = useInternalRouter();
    const {id : company_id, year} = useParams();
    const {companyWageInfo, isLoading, isError} = useWage(company_id,year);
    useEffect(()=>{
      if(isLoading)return
    },[isLoading,companyWageInfo])
    const {company_name, wages : wageInfo} = companyWageInfo??{'company_name' : '',wages : []};
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
          marginTop: "10px"
        }}
        >현직자 {year}년차 실수령 연봉</div>
        <Blank/>
        <Top02>기업명 : {company_name} </Top02>
        <div
        style = {{
          margin: "10px"
        }}>
          <Stack>
              {isLoading?'':wageInfo.length === 0?'':wageInfo.map((item,index) => <DotList key={index} middle={item.nickname} amount={parseInt(item.wage/10000)}></DotList>)}
          </Stack>
        </div>
    </div>
  )
}
