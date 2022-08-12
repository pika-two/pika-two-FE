import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import SuggestList from "../components/Composition/SuggestList";

export default function SuggestPage() {
  const {goBack, push} = useInternalRouter();
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="금융상품 추천"></BothHeader>
              <div style = {{ margin: "3vh 5vw"
                }}>
                    <SuggestList/>
                </div>

    </div>
  )
}
