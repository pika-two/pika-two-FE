import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import Blank from "../components/ui/Blank";
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Input from '../components/ui/Input'
import BadgeBox from '../components/Composition/BadgeBox'
import { useInternalRouter } from "./routing";
import Top02 from "../components/ui/Top/Top02";
import JobPostList from "../components/Composition/JobPostList";
export default function MainPage() {
  const {push} = useInternalRouter();
  return (
    <div>
      <RightOnlyHeader right={<MyPageIcon onClick={()=>push('/myPage')}/>} title="KB 돌아온 구직자"></RightOnlyHeader>
      <div style={{
          display: "flex",
          justifyContent: "center",
          background: "#FFCC00",
        }}>
          <Input/>
        </div>
      <div style={ {
        margin : "10px 5vw"
        }}>
        
        <BadgeBox/>
        <Blank/>
        <Top02 color="#000">채용 진행 중인 공고</Top02>
        <JobPostList></JobPostList>
      </div>
        
    </div>
  )
}
