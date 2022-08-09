import styled ,{ css } from "styled-components";


export default function Button({ disabled, children, color, background = '#FFFFFF' }) {

    return (
        <StyledButton 
          background={background}
          color = {color}
          disabled={disabled}
        >
          <span>{children}</span>
        </StyledButton>
      );
}
const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  width:100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 20px);
  background: ${(props) => props.background};
  color: ${(props) => props.color};
 
`;