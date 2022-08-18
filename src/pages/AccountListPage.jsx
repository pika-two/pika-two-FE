import { useEffect, useState } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message";
import accountService from '../apis/account'
import { useRecoilValue } from "recoil";
import { userInfoStore } from "../shared/store";
import useAccount from "../hooks/useAccount";
import Bold from "../components/ui/Bold";
import Loading from "../components/ui/Loading";
export default function AccountListPage() {
  const {push} = useInternalRouter();
  const [accountList, setAccountList] = useState([]);
  const [selectedAccountID, setSelectedAccount] = useState(-1);
  const userInfo = useRecoilValue(userInfoStore);
  const handleChange = function(event, index){
        if(index == selectedAccountID){
            setSelectedAccount(-1);
        } else {
            setSelectedAccount(index);
        }
  }
  const {accountData, isLoading, isError} = useAccount(userInfo.user_id);
  useEffect(()=>{
    if(isLoading)return
    setAccountList(()=>accountData)
  },[isLoading,accountData])
  const submitAccount = async (event)=>{
    const accountName = accountList[selectedAccountID].account
    const {data,status} = await accountService.post(userInfo.user_id,{
        'account' : accountName
    })
    push(`/accountList/${selectedAccountID}`)
    
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
            {isLoading?<Loading/>:accountList.length?<AccountsList selected={selectedAccountID}  handleClickevent={handleChange} accounts={accountList}></AccountsList>:<Bold>연결할 계좌가 없습니다.</Bold>}
        </div>
        
        <FixedBottomButton disabled = {selectedAccountID === -1} onClick = {submitAccount} background={selectedAccountID === -1?'lightgray':'#FFCC00'} color="white">선택</FixedBottomButton>
    </div>
  )
}