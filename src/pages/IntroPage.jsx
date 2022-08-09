import Logo from "../components/Composition/Logo";
import BackGroundCover from "../components/ui/BackGroundCover";
import Button from "../components/ui/Button";
import { useInternalRouter } from "./routing";
export default function IntroPage(){
    const {push} = useInternalRouter();
    return (
        <div>
            <Logo/>
            <Button onClick={()=>push('/registerPage')}>
                시작하기
            </Button>
            <BackGroundCover backgroundColor='#FC0'/>
        </div>
    )
}