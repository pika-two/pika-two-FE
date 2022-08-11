import styled from "styled-components";

const Top02 = styled.p`
    white-space: pre-line;
    padding: 0 12px;
    font-size: ${props => props.fontsize?props.fontsize:'20px'};
    line-height: 50px;
    word-break: keep-all;
    text-align : left;
    color: ${props => props.color?props.color:'#000'};
    margin: 0;
    margin-left: 10px;
    font-family: "four";
`
export default Top02