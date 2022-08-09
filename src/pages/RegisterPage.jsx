import GeneralHeader from "../components/Composition/GeneralHeader";
import Input from '../components/ui/Input'
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
        </div>
    </div>
  )
}
