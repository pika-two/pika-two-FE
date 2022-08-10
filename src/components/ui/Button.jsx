import styled ,{ css } from "styled-components";


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
  cursor: pointer;
  width:90%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
 
`;