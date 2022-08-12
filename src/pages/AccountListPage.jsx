import { useEffect, useState, useRef } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message";
const mockDataKeyList = ['account_id','account_name','account_number','bank_name','amount']

export default function AccountListPage() {
  const {push} = useInternalRouter();
  const [accountList, setAccountList] = useState([]);


  //TODO Low : 나중에 삭제해도 되도 되는 더미 데이터
  useEffect(()=>{
    setAccountList(()=>{
        const data = [...Array(10)].map((_,index) => {
            const temp = {};
            mockDataKeyList.forEach((item)=> {
                if(item === 'account_id'){
                    temp[item] = index
                } else {
                    temp[item] = parseInt(Math.random()*100)+1
                }
            })
            return temp
        })
        return data;
    })
  },[])

  function handleClick() {
    AccountBtnref.current.disabled = false;
  }

  return (
    <div>
        <GeneralHeader title="계좌목록" />
        <div
        style = {{ 
            borderBottom : "20px solid #e8eaeb"
        }}>
            <Message style={{margin: "30px",}}>아래 계좌 중 급여가 입금되는 <br/> 계좌를 선택해주세요</Message>
        </div>

        <div>
            {/* //TODO Middle : account 목록을 불러오는 요청 후 렌더링 되게 해야한다. */}
            {/* //TODO High : account 선택시 button 버튼 활성화 되는 로직 및 선택 후 버튼 클릭시 다음페이지로 넘어가는 로직 필요 */}
            <AccountsList accounts={accountList}></AccountsList>
        </div>
        <FixedBottomButton 
         onClick = {()=>{push('/incomeList')}} 
         background="#FFCC00" color="white">선택</FixedBottomButton>
    </div>
  )
}