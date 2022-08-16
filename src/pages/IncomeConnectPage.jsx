import CenterBox from "../components/Composition/CenterBox"
import BackGroundCover from "../components/ui/BackGroundCover"
import Button from "../components/ui/Button"
import Boldtext from "../components/ui/Boldtext"
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message"
import { useEffect, useState } from "react";
import incomeService from '../apis/income'
export default function IncomeConnectPage() {
    const {push} = useInternalRouter();
    const [salary, setSalary] = useState(0);
  // TODO : put salary의 용도에 대해 물어보기
    useEffect(()=>{
      // TODO : USER_ID
      const currentSalary = async (user_id = 1, year = 2022)=>{
        const {data,status} = await incomeService.getConnect(user_id,year);
        setSalary(()=>parseInt(data.data.annual_salary/10000));
      }
      currentSalary();
    },[])
  return (
    //TODO low : 이 페이지가 바로 되는 것이 아닌 연동중이라는 표시를 위해 이 페이지 전에 loading 페이지 만들기
    <div>
        <CenterBox>
            <Boldtext fontsize="20px" color="black"
              style={{
                marginTop: "40px"
              }}>
                급여계좌 연동 완료
            </Boldtext>
            <Message  fontsize="17px" color="black"
              style={{
                marginTop: "30px"
              }}>
              2022년 까지 받은 금액은?</Message>
            <Boldtext fontsize="30px" color="black">{salary}만원</Boldtext>
            <Button 
              onClick={()=>push('/mainPage')} 
              background="#FFCC00"
              style={{
                marginTop: "30px"
              }}>
              연동 완료하기</Button>
        </CenterBox>
        <BackGroundCover backgroundColor='#FC0'/>
    </div>
  )
}
