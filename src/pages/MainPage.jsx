import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import Blank from "../components/ui/Blank";
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Input from '../components/ui/Input'
import BadgeBox from '../components/Composition/BadgeBox'
import { useInternalRouter } from "./routing";
import Top02 from "../components/ui/Top/Top02";
import JobPostList from "../components/Composition/JobPostList";
import { useState } from "react";
export default function MainPage() {
  const dummpyData = [{
    'company_id' : 1,
    'company_name' : '국민은행 1',
    'post_id' : 1,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  },
  {
    'company_id' : 2,
    'company_name' : '국민은행 2',
    'post_id' : 2,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  },
  {
    'company_id' : 3,
    'company_name' : '국민은행 3',
    'post_id' : 3,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  },
  {
    'company_id' : 4,
    'company_name' : '국민은행 4',
    'post_id' : 4,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  },{
    'company_id' : 5,
    'company_name' : '국민은행 5',
    'post_id' : 5,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  },{
    'company_id' : 6,
    'company_name' : '국민은행 6',
    'post_id' : 6,
    'post_title' : '2022년 상반기 공채',
    'type' : '공채',
    'start_dt' : '2022-07-01',
    'end_dt' : '2022-07-03'
  }]
  const {push} = useInternalRouter();
  const [jobPosts,setJobPosts] = useState(dummpyData);
  return (
    <div>
      <RightOnlyHeader right={<MyPageIcon onClick={()=>push('/myPage')}/>} title="KB 돌아온 구직자"></RightOnlyHeader>
      <div style={{
          display: "flex",
          justifyContent: "center",
          background: "#FFCC00",
        }}>
          {/* //TODO high : 검색을 하기 위한 input 연동 및 enter 이벤트 및 돋보기(클릭 이미지)추가 필요 */}
          <Input/>
        </div>
      <div style={ {
        margin : "10px 5vw"
        }}>
        {/* //TODO middle : Badge를 클릭했을시 해당 항목 검색 기능 제공 */}
        <BadgeBox/>
        <Blank/>
        {/* //TODO low : 메인페이지 들어올시 mounted 전에 공고 리스트 불러오기 */}
        {/* //TODO low : 공고 클릭시 해당회사 상세 페이지 이동 기능 구현 company_id와 연계*/}
        <Top02 color="#000">채용 진행 중인 공고</Top02>
        <JobPostList jobPosts={jobPosts} />
      </div>
        
    </div>
  )
}
