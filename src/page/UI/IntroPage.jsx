import dolguLogo from '../assets/dolgu_logo.png';
import Buttons from '../../stories/assets/Buttons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export default function IntroPage({location, history}){
    return (
        <Div>
            <div className="logo">
                <Img src={dolguLogo} />
            </div>
            <div className="card">
                <Link to = "/register">
                    <Buttons>
                        시작하기
                    </Buttons>
                </Link>
            </div>
        </Div>
    )
}


const Img= styled.img`
  width: 80%;
  height: 100%;
  margin-top: 50%
`;

const Div = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffcc00;
`;


