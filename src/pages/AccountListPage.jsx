import { useEffect, useState } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message";
const mockDataKeyList = ['account_id','account_name','account_number','bank_name','amount']

export default function AccountListPage() {
  const {push} = useInternalRouter();
  const [accountList, setAccountList] = useState([]);
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
            <AccountsList onClick={()=>{alert('안녕')}} accounts={accountList}></AccountsList>
        </div>
        <FixedBottomButton onClick = {()=>{push('/incomeList')}} background="#FFCC00" color="white">선택</FixedBottomButton>
    </div>
  )
}