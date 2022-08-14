import { useEffect, useState } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message";
import accountService from '../apis/account'
export default function AccountListPage() {
    //TODO : low 통신 이후 삭제해야할 리스트
  const {push} = useInternalRouter();
  const [accountList, setAccountList] = useState([]);
  const [selectedAccountID, setSelectedAccount] = useState(-1);
  const handleChange = function(event, index){
        if(index == selectedAccountID){
            setSelectedAccount(-1);
        } else {
            setSelectedAccount(index);
        }
  }
  useEffect(()=>{
    const getAccount = async (user_id = 1)=>{
        const {data, status} = await accountService.get(user_id) 
        const {data : responseData} = data
        setAccountList(()=>responseData);
    }
    getAccount();
  },[])
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
            {/* //TODO Loading 필요하다. */}
            <AccountsList selected={selectedAccountID}  handleClickevent={handleChange} accounts={accountList}></AccountsList>
        </div>
        
        <FixedBottomButton style={{
            display : selectedAccountID === -1 ? 'none' : 'block'
        }} onClick = {()=>{push(`/accountList/${selectedAccountID}`)}} background="#FFCC00" color="white">선택</FixedBottomButton>
    </div>
  )
}