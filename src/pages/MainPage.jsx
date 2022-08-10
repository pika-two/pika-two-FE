import RightOnlyHeader from "../components/Composition/RightOnlyHeader"
import Blank from "../components/ui/Blank";
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Input from '../components/ui/Input'
import BadgeBox from '../components/Composition/BadgeBox'
import { useInternalRouter } from "./routing";
export default function MainPage() {
  const {push} = useInternalRouter();
  return (
    <div>
      <RightOnlyHeader right={<MyPageIcon onClick={()=>push('/myPage')}/>} title="KB 돌아온 구직자"></RightOnlyHeader>
      <Blank/>
      <Blank/>
      <div style={ {
        margin : "0 5vw"
        }}>
        <Input />
        <BadgeBox/>
      </div>
        
    </div>
  )
}
