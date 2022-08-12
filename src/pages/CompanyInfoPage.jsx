import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Top02 from "../components/ui/Top/Top02";
import CompanyListItem from "../components/ui/CompanyListItem";
import ImageCard from "../components/ui/ImageCard";
import ReviewList from "../components/Composition/ReviewList";
import Blank from "../components/ui/Blank";

export default function CompanyInfoPage() {
  const {goBack, push} = useInternalRouter();
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업정보"></BothHeader>
        <Blank/>
        <Top02>기업이름</Top02>
        <Top02>공고</Top02>
        <p style={{border : '1px solid'}}></p>
        <div style = {{ margin: "3vh 5vw"
                }}>
        <CompanyListItem/></div>
        <Top02>연봉</Top02>
        <div style={{
        width : '80vw',
        height : '80vw',
        margin : '0 auto 30px auto',
        backgroundColor : '#FFC'}}>챠트 들어갈 곳</div>

        <Top02> 리뷰 </Top02>
        <ReviewList/>
    </div>
  )
}
