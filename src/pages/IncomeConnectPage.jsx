import CenterBox from "../components/Composition/CenterBox"
import BackGroundCover from "../components/ui/BackGroundCover"
import Button from "../components/ui/Button"
import Top02 from "../components/ui/Top/Top02"
import Boldtext from "../components/ui/Boldtext"
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message"

export default function IncomeConnectPage() {
    const {push} = useInternalRouter();
  return (
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
            <Boldtext fontsize="30px" color="black">3287만원</Boldtext>
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
