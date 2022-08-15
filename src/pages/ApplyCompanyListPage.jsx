import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import ApplyCompanyList from '../components/Composition/ApplyCompanyList'
import { useState,useEffect } from "react";
import userService from "../apis/user";
export default function ApplyCompanyListPage() {
  const {goBack, push} = useInternalRouter();
  const [applyCompanys,setApplyCompanys] = useState([]);

  const handleDeleteApplyCompany = async function(event,apply_id){
      // TODO USER_ID
      if(confirm('정말 삭제하시겠습니까?')){
        const {status, data} = await userService.deleteApplyList(1,apply_id);
        if( status === 200){
          setApplyCompanys((prev)=>prev.filter(item=> item.apply_id !== apply_id))
        }
      }
  }
  useEffect(()=>{
    const getApplyList = async function(){
      //TODO USER_ID
      const {data,status } = await userService.getApplyList(1);
      const { data : responseData} = data;
      setApplyCompanys(()=>responseData);
    }
    getApplyList();
  },[])
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="지원 현황 보기"></BothHeader>
              <div style = {{ margin: "3vh 5vw"
                }}>
                <ApplyCompanyList applyCompanys={applyCompanys}  handleDeleteApplyCompany={handleDeleteApplyCompany}/>
              </div>



    </div>
  )
}
