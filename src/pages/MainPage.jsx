import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BadgeBox from '../components/Composition/BadgeBox'
import { useInternalRouter } from "./routing";
import Top02 from "../components/ui/Top/Top02";
import JobPostList from "../components/Composition/JobPostList";
import { useRef } from "react";
import InputComponent from "../components/Composition/InputComponent";
import SearchIcon from "../components/ui/icon/SearchIcon";
import useJobPosts from '../hooks/useJobPosts'

export default function MainPage() {
  const {push} = useInternalRouter();
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
  const onClickBadge = function(event,key,value){
    push(`/search?${key}=${value}`)
  }
  const {jobPostData, isLoading, isError} = useJobPosts()
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
        <BadgeBox onClick={onClickBadge}/>
        <Top02 color="#000">채용 진행 중인 기업</Top02>
        {isLoading?<div>로딩중</div>:<JobPostList jobPosts={jobPostData} />}
        
      </div>
        
    </div>
  )
}
