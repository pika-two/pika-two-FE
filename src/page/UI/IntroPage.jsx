import dolguLogo from '../assets/dolgu_logo.png';
import Buttons from '../assets/Buttons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';



export default function IntroPage({location, history}){
    return (
        <Div>
            <div className="logo">
                <Img src={dolguLogo} />
            </div>
            <div className="card">
                <Link to = "/register">
                    <Buttons background={palette.white} color = {palette.black}>
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
    width: 100vw;
    height: 100vh;
    background-color: #ffcc00;
    text-align: center;
    max-width: 2000px;
    margin: 0 auto;
`;



