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
              <ApplyCompanyList/>

    </div>
  )
}
