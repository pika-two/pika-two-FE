import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Top02 from "../components/ui/Top/Top02";
import CompanyListItem from "../components/ui/CompanyListItem";
import ImageCard from "../components/ui/ImageCard";
import ReviewList from "../components/Composition/ReviewList";

export default function CompanyInfoPage() {
  const {goBack, push} = useInternalRouter();
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업정보"></BothHeader>
        <Top02>기업이름</Top02>
        <Top02>공고</Top02>
        <p style={{border : '1px solid'}}></p>
        {/* //TODO middle : 공고에 찜하는 버튼 추가 */}
        <CompanyListItem/>
        <br></br>

        <Top02>연봉</Top02>
        {/* //TODO high : 챠트 라이브러리 찾고 적용 */}
        {/* //TODO high : 챠트 만들어진 후 챠드 막대 클릭시 연봉정보(SalaryList) 페이지로 이동 */}
        <div style={{
        width : '80vw',
        height : '80vw',
        margin : '0 auto',
        backgroundColor : '#FFC'}}>챠트 들어갈 곳</div>
        {/* //TODO low : axios로 해당 기업리뷰 가져오기 */}
        <Top02> 리뷰 </Top02>
        <ReviewList/>
    </div>
  )
}
