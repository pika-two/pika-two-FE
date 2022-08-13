import { useEffect, useState } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
import { useInternalRouter } from "./routing";
import Message from "../components/ui/message";

export default function AccountListPage() {
    //TODO : low 통신 이후 삭제해야할 리스트
    const dummyData = [{
        'account_id' : 1,
        'bank_name' : '국민은행1',
        'account': 'KB국민ONE통장',
        'balance' : 1000000,
      },
      {
        'account_id' : 2,
        'bank_name' : '국민은행2',
        'account': 'KB국민ONE통장',
        'balance' : 2000000,
      },
      {
        'account_id' : 3,
        'bank_name' : '국민은행3',
        'account': 'KB국민ONE통장',
        'balance' : 3000000,
      },
      {
        'account_id' : 4,
        'bank_name' : '국민은행4',
        'account': 'KB국민ONE통장',
        'balance' : 4000000,
      },
      {
        'account_id' : 5,
        'bank_name' : '국민은행5',
        'account': 'KB국민ONE통장',
        'balance' : 5000000,
      },
    ]
  const {push} = useInternalRouter();
  const [accountList, setAccountList] = useState(dummyData);
  const [selectedAccountID, setSelectedAccount] = useState(-1);
  const handleChange = function(event, id){
        if(id == selectedAccountID){
            setSelectedAccount(-1);
        } else {
            setSelectedAccount(id);
        }
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
            <AccountsList selected={selectedAccountID}  handleClickevent={handleChange} accounts={accountList}></AccountsList>
        </div>
        
        <FixedBottomButton style={{
            display : selectedAccountID === -1 ? 'none' : 'block'
        }} onClick = {()=>{push(`/accountList/${selectedAccountID}`)}} background="#FFCC00" color="white">선택</FixedBottomButton>
    </div>
  )
}