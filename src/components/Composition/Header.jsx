import styled from "styled-components"

const HeaderWrapper = styled.header`
    display : flex;
    padding : 0px 8px;
    background-color: #FC0;
    border-bottom: ${props => props.borderBottom?props.borderBottom: '#000'};

`

export default HeaderWrapper