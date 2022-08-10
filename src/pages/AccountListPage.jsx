import { useEffect, useState } from "react";
import GeneralHeader from "../components/Composition/GeneralHeader";
import FixedBottomButton from "../components/ui/FixedBottomButton";
import AccountsList from "../components/Composition/AccountsList";
const mockDataKeyList = ['account_id','account_name','account_number','bank_name','amount']

export default function AccountListPage() {

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
        <div>
            <AccountsList onClick={()=>{alert('안녕')}} accounts={accountList}></AccountsList>
        </div>
        <FixedBottomButton background="#FFCC00" color="white">선택</FixedBottomButton>
    </div>
  )
}

const Item = function(){
    return (
        <div style={{
            display : "flex",
            padding : "10px 0px"
        }}>
    
            <img width={80} height = {80} src="https://play-lh.googleusercontent.com/K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E" alt=""/>
            <div style={{
                display : "flex",
                flexDirection : "column",
            }}>
                <div>KB 국민 ONE통장</div>
                <div>계좌번호 잔뜩</div>
                <div>금액 잔뜩</div>
            </div>
        </div>
    )
}