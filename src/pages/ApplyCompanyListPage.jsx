import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import ApplyCompanyList from '../components/Composition/ApplyCompanyList'
export default function ApplyCompanyListPage() {
  const {goBack, push} = useInternalRouter();
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="지원 현황 보기"></BothHeader>
              {/* //TODO middle : mounted 전에 해당 정보들에 대해 가져오기 */}
              {/* //TODO middle : 삭제버튼 클릭시, 페이지에서 먼저 삭제 후 axios로 삭제 요청 보낼지 고민 */}
              {/* //TODO middle : CompanyList에 대해 데이터 연계 필요성 및 이벤트 적용 */}
              {/* //TODO low : 공고 클릭시 해당 회사 페이지로 이동 */}
              <ApplyCompanyList/>

    </div>
  )
}
