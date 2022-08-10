import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import { useInternalRouter } from "./routing";
export default function MainPage() {
  const {push} = useInternalRouter();
  return (
    <div>
      <RightOnlyHeader right={<MyPageIcon onClick={()=>push('/myPage')}/>} title="KB 돌아온 구직자"></RightOnlyHeader>

    </div>
  )
}
