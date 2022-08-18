import BackGroundCover from "../components/ui/BackGroundCover"
import CenterBox from "../components/Composition/CenterBox"
import Button from '../components/ui/Button'
import { useInternalRouter } from "./routing"
export default function ErrorPage() {
  const {push} = useInternalRouter();
  return (
    <div>
        <CenterBox>
        <div style={{width:"100%",
        height:0,
        paddingBottom:"100%",
        position:"relative"
        }}>
            <iframe src="https://giphy.com/embed/63xKCD065JsZrCDzQw" width="100%" height="100%" 
            style={{position:'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            
            </div>
            <Button onClick={()=>push('mainPage')}>메인페이지로 돌아가기</Button>
        </CenterBox>   
        <BackGroundCover backgroundColor='#FC0'/>
        
    </div>
  )
}
