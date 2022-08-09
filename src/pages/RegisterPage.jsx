import GeneralHeader from "../components/Composition/GeneralHeader";
import Input from '../components/ui/Input'
import Button from "../components/ui/Button";
export default function RegisterPage() {
  return (
    <div>
        <GeneralHeader title="신상 정보 기입 페이지"/>
        <div style={{
            margin : '0 20px'}
            }>
            <Input/>
            <Input/>
            <Input/>
            <div style={{
            margin : '16px 0'}
            }>
                <label>
                <input type="checkbox" />
                (필수) 마이데이터 연동을 통해 계좌 정보 및 적용 내용을 연동 하는 것에 동의합니다.
                </label>
            </div>
            <Button background="#FFCC00" color="white">
                입력 완료
            </Button>
        </div>
    </div>
  )
}
