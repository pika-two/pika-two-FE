import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import BookMarkList from '../components/Composition/BookMarkList'
import { useInternalRouter } from "./routing"
export default function BookmarkPage() {
    const {goBack, push} = useInternalRouter();
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="찜한 목록"></BothHeader>
        <BookMarkList/>
    
    </div>
  )
}
