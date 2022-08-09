// Button.jsx
import styled ,{ css } from "styled-components";






function Buttons({ disabled, children, color, background }) {

    return (
        <StyledButton 
          background={background}
          color = {color}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      );
}

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  width:90%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 20px);
  background: ${(props) => props.background};
  color: ${(props) => props.color};
 

`;

export default Buttons;