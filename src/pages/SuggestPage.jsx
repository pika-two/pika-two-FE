import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import SuggestList from "../components/Composition/SuggestList";
import useSuggest from "../hooks/useSuggest";
import { useRecoilValue } from "recoil";
import { userInfoStore } from "../shared/store";
import Loading from '../components/ui/Loading'
export default function SuggestPage() {
  const {goBack, push} = useInternalRouter();
  const userInfo = useRecoilValue(userInfoStore);
  const {suggestData, isLoading, isError} = useSuggest(userInfo.user_id);
  console.log(suggestData);
  return (
    <div>
              <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="금융상품 추천"></BothHeader>
              
              {isLoading?
              <Loading/>:              
              <div 
              style = {{ 
                margin: "3vh 5vw"
               }}>
                    <SuggestList suggests = {suggestData}/>
              </div>}


    </div>
  )
}
