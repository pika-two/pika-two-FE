import GeneralHeader from "../components/Composition/GeneralHeader";
import Input from '../components/ui/Input'
import FixedBottomButton from '../components/ui/FixedBottomButton'
import { useInternalRouter } from "./routing";
import "../App.css";

export default function RegisterPage() {
  const {push} = useInternalRouter();
  return (
    <div>
        <GeneralHeader title="기본정보 등록"/>
        <div style={{
            margin : '20px 20px'}
            }>
            <Input/>
            <Input/>
            <Input/>
            <div style={{
            margin : '16px 0'}
            }>
                <label>
                <input type="checkbox"/>
                (필수) 마이데이터 연동을 통해 계좌 정보 및 적용 내용을 연동 하는 것에 동의합니다.
                </label>
            </div>
            <FixedBottomButton onClick={()=>push('/accountList')}  background="#FFCC00" color="white">
                입력 완료
            </FixedBottomButton>
        </div>
    </div>
  )
}
