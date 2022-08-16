import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from '../components/ui/FixedBottomButton'
import { useInternalRouter } from "./routing";
import "../App.css";
import Blank from "../components/ui/Blank";
import { useState,useRef } from "react";
import InputComponent from "../components/Composition/InputComponent"; 
import RadioLabelAndInput from "../components/Composition/RadioLabelAndInput";
import userService from "../apis/user";
export default function RegisterPage() {
  const {push} = useInternalRouter();
  // 나이, 성별, 연봉, 입사년도;
  const [genders, setGenders] = useState(['남성', '여성']);
  const [selectGender, setSelectGender] = useState('');
  const [checkednotice, setCheckednotice] = useState(false);
  const birthyrInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const joinYearInputRef = useRef(null);
  const companyNameInputRef = useRef(null);
  const handleChangeGender = (event)=>{
    if (event.target.tagName === 'INPUT'){
      setSelectGender(()=>event.target.value);
    }
  }
  const typeCheckBirthDay = (value)=>{
    if(value>=1950 && value<2022){
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
  const typeCheckCompanyName = (value)=>{
    return value.trim().length
  }
  const submitEvent = async ()=>{
    const birthyr = birthyrInputRef.current.value;
    const email = emailInputRef.current.value;
    const joinYear = joinYearInputRef.current.value;
    const companyName = companyNameInputRef.current.value;
    if(!typeCheckBirthDay(birthyr)){
      alert('출생년도를 입력해주세요')
      birthyrInputRef.current.value = 1990;
      birthyrInputRef.current.focus()
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
      joinYearInputRef.current.value = 0;
      joinYearInputRef.current.focus();
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
    if(!typeCheckCompanyName(companyName)){
      alert('회사명을 제대로 입력해주세요')
      companyNameInputRef.current.value = '';
      companyNameInputRef.current.focus();
      return
    }
    const en = {
      '남성' : 'M',
      '여성' : 'F'
    }
    const data = {
      birth_yr : birthyr,
      company_name : companyName,
      gender : en[selectGender],
      email,
      work_start_dt : joinYear
    }
    // TODO : 최상급!!!!! responseData에서 userId를 받아서 전역객체에 저장시켜야함
    const {data : responseData ,status} = await userService.post(data).catch((e)=>alert('에러가 발생했습니다.'))
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
            <InputComponent type='number' min='1940' max='2010' placeholder='출생년도를 입력해주세요' ref={birthyrInputRef}/>
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
            <InputComponent placeholder="직장명을 입력해주세요"  ref={companyNameInputRef}/>
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
            <FixedBottomButton onClick={submitEvent}  background="#FFCC00" color="white">
                입력 완료
            </FixedBottomButton>
        </div>
    </div>
  )
}
