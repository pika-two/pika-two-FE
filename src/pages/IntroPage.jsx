import Logo from "../components/Composition/Logo";
import BackGroundCover from "../components/ui/BackGroundCover";
import Button from "../components/ui/Button";
import { useInternalRouter } from "./routing";
export default function IntroPage(){
    const {push} = useInternalRouter();
    return (
        <div>
            <Logo/>
            <Button  onClick={()=>push('/registerPage')} style = {{margin : "0 17px"}}>
                μμνκΈ°
            </Button>
            <BackGroundCover backgroundColor='#FC0'/>
        </div>
    )
}