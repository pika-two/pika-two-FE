import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import ApplyCompanyList from '../components/Composition/ApplyCompanyList'
import { useState,useEffect } from "react";
import userService from "../apis/user";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoStore } from "../shared/store";
import useApplyCompany from "../hooks/useApplyCompany";
export default function ApplyCompanyListPage() {
  const {goBack, push} = useInternalRouter();
  const [applyCompanys,setApplyCompanys] = useState([]);
  const [userInfo,setUserInfo] = useRecoilState(userInfoStore)

  const handleDeleteApplyCompany = async function(event,apply_id){
      if(confirm('정말 삭제하시겠습니까?')){
        const {status, data} = await userService.deleteApplyList(userInfo.user_id,apply_id);
        if( status === 200){
          setUserInfo({...userInfo,applied_list : userInfo.applied_list.filter( item=> item.apply_id !== apply_id)})
        }
      }
  }
  const {applyCompanyData, isLoading, isError} = useApplyCompany(userInfo.user_id);
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="지원 현황 보기"></BothHeader>
              <div style = {{ margin: "3vh 5vw"
                }}>
                <ApplyCompanyList applyCompanys={applyCompanyData}  handleDeleteApplyCompany={handleDeleteApplyCompany}/>
              </div>



    </div>
  )
}
