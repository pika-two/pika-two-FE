import Bold from "./Bold"
import styled from "styled-components"
export default function IncomeListItem({income,...rest}) {
  return (
    <Div
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        borderRadius: "20px"
        
    }}
    {...rest}
    >

        <Bold>2022.07.21</Bold>
        <Bold>월정급여</Bold>
        <Bold>2,000,000원</Bold>
    </Div>
  )
}

const Div = styled.div`
  background : #F6F6F6;
  margin : 0 15px 15px 15px;
  width: 140px;
  height:140px;
  &:hover{
    
    background: #faeaac;
  }
`;