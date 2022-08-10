import CenterBox from "../components/Composition/CenterBox"
import BackGroundCover from "../components/ui/BackGroundCover"
import Button from "../components/ui/Button"
import Top02 from "../components/ui/Top/Top02"
import { useInternalRouter } from "./routing";

export default function IncomeConnectPage() {
    const {push} = useInternalRouter();
  return (
    <div>
        <CenterBox>
            <Top02 color="black">급여계좌 연동 완료</Top02>
            <Top02 color="black">2022년 까지 받은 금액은?</Top02>
            <Top02 color="black">3287만원</Top02>
            <Button onClick={()=>push('/myPage')} background="#FFCC00">연동 완료하기</Button>
        </CenterBox>
        <BackGroundCover backgroundColor='#FC0'/>
    </div>
  )
}
