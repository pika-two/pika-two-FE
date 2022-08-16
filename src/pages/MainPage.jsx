import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
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
          justifyContent: "center",
          background: "#FFCC00",
        }}>
          <InputComponent onKeyPress={onKeyPress} ref={searchInputRef}/>
          <SearchIcon onClick={searchEvent}/>
        </div>
      <div style={ {
        margin : "10px 5vw"
        }}>
        <BadgeBox onClick={onClickBadge}/>
        <Top02 color="#000">채용 진행 중인 공고</Top02>
        <JobPostList jobPosts={jobPosts} />
      </div>
        
    </div>
  )
}
