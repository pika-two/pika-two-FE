import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import Blank from "../components/ui/Blank";
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BadgeBox from '../components/Composition/BadgeBox'
import { useInternalRouter } from "./routing";
import Top02 from "../components/ui/Top/Top02";
import JobPostList from "../components/Composition/JobPostList";
import { useState,useRef, useEffect } from "react";
import InputComponent from "../components/Composition/InputComponent";
import SearchIcon from "../components/ui/icon/SearchIcon";
import companyService from "../apis/company";
export default function MainPage() {
  const {push} = useInternalRouter();
  const [jobPosts,setJobPosts] = useState([]);
  const searchInputRef = useRef(null);
  const searchEvent = function(){
    const value = searchInputRef.current.value
    if(value.trim().length){
      push(`/search?keyword=${value}`)
    }
  }
  const onKeyPress = function(event){
    if(event.key === 'Enter'){
      searchEvent();
    }
  }
  const onClickBadge = function(event,type){
    push(`/search?type=${type}`)
  }
  useEffect(()=>{
    // TODO HIGH : 공고리스트 조회는 백에 구현 안되어있으니 같이 해야한다.
    const getJobpost = async () => {
      const {data,status} = await companyService.getPost();
      const {data : responseData} = data;
      setJobPosts(()=>responseData);
    }
    getJobpost();
  },[])
  return (
    <div>
      <RightOnlyHeader right={<MyPageIcon onClick={()=>push('/myPage')}/>} title="KB 돌아온 구직자"></RightOnlyHeader>
      <div style={{
          display: "flex",
          width: "100%",
          height: "8vh",
          justifyContent: "center",
          marginBottom: "25px",
          background: "#FFCC00",
          position: "relative",
        }}>
          <InputComponent onKeyPress={onKeyPress} ref={searchInputRef}/>
          <div style = {{position: "absolute" , marginLeft: "290px", marginTop: "14px"}}>
            <SearchIcon onClick={searchEvent}/>
          </div>
        </div>
      <div style={ {
        margin : "10px 5vw"
        }}>
        {/* //TODO middle : Badge를 클릭했을시 해당 항목 검색 기능 제공 */}
        <BadgeBox onClick={onClickBadge}/>
        <Top02 color="#000">채용 진행 중인 공고</Top02>
        <JobPostList jobPosts={jobPosts} />
      </div>
        
    </div>
  )
}
