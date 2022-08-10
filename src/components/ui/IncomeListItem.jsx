import Message from "./message";
import styled from "styled-components";
import Top02 from "./Top/Top02";

export default function IncomeListItem({income,...rest}) {
  return (
    <div
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        backgroundColor : "#F6F6F6",
        margin : "0 15px 15px 15px",
        width: "140px",
        height:"140px",
    }}
    {...rest}
    >

        <Bold>2022.07.21</Bold>
        <Bold>월정급여</Bold>
        <Bold>2,000,000원</Bold>
    </div>
  )
}


const Bold = styled.p`

white-space: pre-line;
font-weight: bold;
padding: 0 0px;
font-size: 15px;
line-height: 30px;
word-break: keep-all;
text-align : center;
color: #000;
margin: 0;
font-family: "Noto Sans KR", sans-serif;
`;

