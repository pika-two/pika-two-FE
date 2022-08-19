import CenterBox from "../components/Composition/CenterBox"
import BackGroundCover from "../components/ui/BackGroundCover"
import Button from "../components/ui/Button"
import Boldtext from "../components/ui/Boldtext"
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message"
import { useRecoilValue } from "recoil";
import { userInfoStore } from "../shared/store";
import useIncomeConnect from "../hooks/useIncomeConnect";
import Loading from "../components/ui/Loading";
import numberToBank from "../utils/numberToBank";
export default function IncomeConnectPage() {
    const {push} = useInternalRouter();
    const userInfo = useRecoilValue(userInfoStore);
    const {annual_salary , isLoading, isError} = useIncomeConnect(userInfo.user_id,2022);
  return (

    isLoading?
    <div style={{
      display : 'flex',
      'flexDirection' : 'column',
      'justifyContent' : 'center',
      'height' : '100vh'
    }}>
      <Loading/>
      <BackGroundCover backgroundColor='#FC0'/>
    </div>
    :
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
              2022년 올해 받은 금액은?</Message>
            <Boldtext fontsize="30px" color="black">{isLoading?'0':numberToBank.format( parseInt(annual_salary/10000) )}만원</Boldtext>
            <Button 
              onClick={()=>push('/mainPage')} 
              background="#FFCC00"
              style={{
                marginTop: "1vh"
              }}>
              연동 완료하기</Button>
        </CenterBox>
        <BackGroundCover backgroundColor='#FC0'/>
    </div>
  )
}
