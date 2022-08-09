import dolguLogo from '../assets/dolgu_logo.png'
import Buttons from '../../stories/assets/Buttons';
import styled from 'styled-components';


export default function IntroPage(){
    return (
        <>
        <div className="logo">
            <Img src={dolguLogo} />
        </div><br/><br/>
        <div className="card">
            <Buttons onClick={() => setCount((count) => count + 1)}>
            시작하기
            </Buttons>
        </div>
        </>
    )
}


const Img= styled.img`
  width: 100%;
  height: 100%;
  margin-top: 70%
`;


