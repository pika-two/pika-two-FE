// Button.jsx
import styled ,{ css } from "styled-components";






function Buttons({ disabled, children, font_color, background_color }) {

    return (
        <StyledButton
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
  width:100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 20px);
  background: var(--button-bg-color, #FFFFFF);
  color: var(--button-color, #000000);
  ${props=>props.size}
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Buttons;