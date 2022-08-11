
import styled from "styled-components";

export default function AccountListItem({account,...rest}) {
  const {account_id, account_name, account_number, bank_name, amount} = account;
  return (
        (
            <Div style={{
                display : "flex",
                padding : "10px 20px"
            }} {...rest}>
        
                <img width={80} height = {80} src="https://play-lh.googleusercontent.com/K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E" alt=""
                style={{
                    margin : "30px 20px 20px 0px",
                }}/>
                <div style={{
                    display : "flex",
                    flexDirection : "column",
                    width : "100%",
                    margin: "30px",
                }}>
                    <div>
                        <Title>KB 국민ONE 통장{bank_name}</Title>
                    </div>
                    <div><Smallfont>1234-5678{account_number}</Smallfont></div>
                    <div><Amount>{amount}원</Amount></div>
                </div>
            </Div>

        )
    )


}
const Div = styled.div`
    border-top: 2px solid #d2d4d9;
`;
const Title = styled.p`

    white-space: pre-line;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    word-break: keep-all;
    color: #000;
    margin: 2px 0 10px 0 ;
    font-family: "six";
`;

const Smallfont = styled.p`
    text-align: center;
    white-space: pre-line;
    padding: 0;
    font-size: 17px;
    margin: 0 0 10px 0;
    word-break: keep-all;
    color: #000;
    font-family: "three";
`;

const Amount = styled.p`
    text-align: right;
    white-space: pre-line;
    padding: 0 20px 0 0;
    font-size: 15px;
    margin: 0;
    word-break: keep-all;
    color: #053b99;
    font-family: "four";
`;