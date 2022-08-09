import Logo from "../components/Composition/Logo";
import BackGroundCover from "../components/ui/BackGroundCover";
import Button from "../components/ui/Button";

export default function IntroPage(){
    return (
        <div>
            <Logo/>
            <Button>
                시작하기
            </Button>
            <BackGroundCover backgroundColor='#FC0'/>
        </div>
    )
}