import styled ,{ css } from "styled-components";

function Titles({disabled, children}) {
    return(
      <StyledLink  disabled={disabled} >
        {children}
      </StyledLink>
    );
      

}


const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  font-weight: bold;
  font-family: "Bold";
  font-size: 1.5rem;
`;

export default Titles;