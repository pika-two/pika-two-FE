import styled from "styled-components";

const Boldtext = styled.p`
    white-space: pre-line;
    padding: 0 12px;
    font-size: ${props => props.fontsize?props.fontsize:'14px'};
    line-height: 40px;
    word-break: keep-all;
    text-align : center;
    color: ${props => props.color?props.color:'#FFF'};
    margin: 2%;
    font-family: "six";
`
export default Boldtext;