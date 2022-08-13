import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import ApplyCompanyList from '../components/Composition/ApplyCompanyList'
import { useState } from "react";

export default function ApplyCompanyListPage() {
  const dummyData = [{
    'apply_id': 1,
    'post_id': 0,
     'post_title': '2022년 상반기 공채 1',
     'start_dt' : '0000-01-01',
     'end_dt' : '9999-12-31',
     'type': '공채',
     'company_id': 0,
     'company_name': '국민은행',
     'status': '진행중',
   },
   {
    'apply_id': 2,
    'post_id': 0,
     'post_title': '2022년 상반기 공채 2',
     'start_dt' : '0000-01-01',
     'end_dt' : '9999-12-31',
     'type': '공채',
     'company_id': 0,
     'company_name': '국민은행',
     'status': '합격',
   },
   {
    'apply_id': 3,
    'post_id': 0,
     'post_title': '2022년 상반기 공채 3',
     'start_dt' : '0000-01-01',
     'end_dt' : '9999-12-31',
     'type': '공채',
     'company_id': 0,
     'company_name': '국민은행 3',
     'status': '불합격',
   },
   {
    'apply_id': 4,
    'post_id': 0,
     'post_title': '2022년 상반기 공채 4',
     'start_dt' : '0000-01-01',
     'end_dt' : '9999-12-31',
     'type': '공채',
     'company_id': 0,
     'company_name': '국민은행 4',
     'status': '지원 전',
   },]
  const {goBack, push} = useInternalRouter();
  const [applyCompanys,setApplyCompanys] = useState(dummyData);

  const handleDeleteApplyCompany = function(event,apply_id){
      // TODO High : Delete 요청 후 성공하면 삭제
      if(confirm('정말 삭제하시겠습니까?')){
        setApplyCompanys((prev)=>prev.filter(item=> item.apply_id !== apply_id))
      }
  }
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="지원 현황 보기"></BothHeader>
              {/* //TODO middle : mounted 전에 해당 정보들에 대해 가져오기 */}
              <div style = {{ margin: "3vh 5vw"
                }}>
                <ApplyCompanyList applyCompanys={applyCompanys}  handleDeleteApplyCompany={handleDeleteApplyCompany}/>
              </div>



    </div>
  )
}
