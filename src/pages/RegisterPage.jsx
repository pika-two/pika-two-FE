import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from '../components/ui/FixedBottomButton'
import { useInternalRouter } from "./routing";
import "../App.css";
import Blank from "../components/ui/Blank";
import { useState,useRef,useEffect } from "react";
import InputComponent from "../components/Composition/InputComponent"; 
import RadioLabelAndInput from "../components/Composition/RadioLabelAndInput";
export default function RegisterPage() {
  const {push} = useInternalRouter();
  // 나이, 성별, 연봉, 입사년도;
  const [genders, setGenders] = useState(['남성', '여성']);
  const [selectGender, setSelectGender] = useState('');
  const [checkednotice, setCheckednotice] = useState(false);
  const ageInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const joinYearInputRef = useRef(null);
  const handleChangeGender = (event)=>{
    if (event.target.tagName === 'INPUT'){
      setSelectGender(()=>event.target.value);
    }
  }
  const typeCheckAge = (value)=>{
    if(value>=10 && value<100){
        return true
    } else {
      return false
    
    }
  }
  const typeCheckEmail = (value)=>{
    const regaxEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regaxEmail.test(value)){
      return true
    } 
    return false
  }
  const typeCheckJoinYear = (value)=>{
    if(value>= 1950 && value <=2022){
      return true
    } else {
      return false
    }
  }
  const submitEvent = ()=>{
    const age = ageInputRef.current.value;
    const email = emailInputRef.current.value;
    const joinYear = joinYearInputRef.current.value;
    if(!typeCheckAge(age)){
      alert('나이를 입력해주세요')
      ageInputRef.current.value = 0;
      ageInputRef.current.focus()
      return
    }
    if(!typeCheckEmail(email)){
      alert('제대로 된 이메일을 입력해주세요')
      emailInputRef.current.value = '';
      emailInputRef.current.focus();
      return
    }
    if(!typeCheckJoinYear(joinYear)){
      alert('입사년도를 입력해주세요')
      joinYear.current.value = 0;
      joinYear.current.focus();
      return
    }
    if(!selectGender){
      alert('성별을 선택해주세요.')
      return
    }
    if(!checkednotice){
      alert('필수 동의사항에 동의버튼을 눌러주세요.')
      return
    }
    push('/accountList')
  }

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
            <InputComponent type='number' min='0' max='100' placeholder='나이를 입력해주세요' ref={ageInputRef}/>
            <div style={{
              display : 'grid',
              alignItems : 'center',
              gridTemplateColumns : 'auto 80px 80px'
            }} onClick={handleChangeGender}>
              <div style={{
                textAlign : 'center'
              }}>성별</div>
              {
                  genders.map((name, index) => 
                  <RadioLabelAndInput key={index} label={name} checked = {selectGender ===name} name='성별'></RadioLabelAndInput>
                  
                  )
              }
            </div>
            <Blank/>
            <InputComponent placeholder="직장이메일을 입력해주세요." type='email' ref={emailInputRef}/>
            <Blank/>
            <InputComponent placeholder="입사년도를 입력해주세요"   type='number' ref={joinYearInputRef}/>
            <div style={{
            margin : '16px 0',
            fontFamily : "three",
            textAlign : "center"
            }
            }>
                <label>
                <input type="checkbox"  checked={checkednotice} onChange={()=>setCheckednotice((state)=>!state)} />
                (필수) 마이데이터 연동을 통해 계좌 정보 및 <br/>적용 내용을 연동 하는 것에 동의합니다.
                </label>
            </div>
            {/* //TODO 우선순위 : 하 accountList 상수화 색깔 상수화 필요성 */}
            <FixedBottomButton onClick={submitEvent}  background="#FFCC00" color="white">
                입력 완료
            </FixedBottomButton>
        </div>
    </div>
  )
}
