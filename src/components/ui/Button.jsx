import styled from "styled-components";


export default function Button({ disabled, children, color, background = '#FFFFFF',...rest }) {

    return (
        <StyledButton 
          background={background}
          color = {color}
          disabled={disabled}
          {...rest}
        >
          <span>{children}</span>
        </StyledButton>
      );
}
const StyledButton = styled.button`
  margin: 0 auto;
  border: none;
  cursor : ${props => props.disabled?'default':'pointer'};
  width:90%;
  font-family: "four";
  font-size: 1.3rem;
  padding: 12px 16px;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: #000000;
  background: ${(props) => props.background};
  color: #000000;
 
`;