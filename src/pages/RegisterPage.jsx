import GeneralHeader from "../components/Composition/GeneralHeader";
import Input from '../components/ui/Input'
import FixedBottomButton from '../components/ui/FixedBottomButton'
import { useInternalRouter } from "./routing";
import "../App.css";
import Blank from "../components/ui/Blank";

export default function RegisterPage() {
  const {push} = useInternalRouter();
  return (
    <div>
        <GeneralHeader title="기본정보 등록"/>
        <div style={{
            margin : '20px 20px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }
            }>
              {/* //TODO High : Input에 대한 validation 및 submit 이벤트 추가 */}
              {/* //TODO High : Input 종류에 대해서 더 추가 필요성  */}
            <Input/>
            <Blank/>
            <Input/>
            <Blank/>
            <Input/>
            <div style={{
            margin : '16px 0',
            fontFamily : "three",
            textAlign : "center"
            }
            }>
                <label>
                <input type="checkbox" />
                (필수) 마이데이터 연동을 통해 계좌 정보 및 <br/>적용 내용을 연동 하는 것에 동의합니다.
                </label>
            </div>
            {/* //TODO 우선순위 : 하 accountList 상수화 색깔 상수화 필요성 */}
            <FixedBottomButton onClick={()=>push('/accountList')}  background="#FFCC00" color="white">
                입력 완료
            </FixedBottomButton>
        </div>
    </div>
  )
}
