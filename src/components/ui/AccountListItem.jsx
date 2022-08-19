
import styled from "styled-components";
import bankbook from "../../assets/bankbook.png"
import numberToBank from "../../utils/numberToBank";
export default function AccountListItem({account,selected,...rest}) {
  const {account : account_name, bank_name, balance} = account;
  return (
        (
            <Div style={{
                display : "flex",
                padding : "10px 20px",
                border : selected?'1px solid #FC0':'',
                background : selected?'#FC0':'white'
            }} {...rest}>
        
                <img width={80} height = {80} src={bankbook} alt=""
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
                        <Title>{bank_name}</Title>
                    </div>
                    <div><Smallfont>{account_name}</Smallfont></div>
                    <div><Amount>{numberToBank.format(balance)}원</Amount></div>
                </div>
            </Div>

        )
    )


}
const Div = styled.div`
    border-top: 2px solid #d2d4d9;
    &:hover{
        background: #faeaac;
    }
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