import styled from "styled-components";

const StyledLogo = styled.div`
  cursor: pointer;
  gap: 10px;
  display: flex;
  align-items: center;
  img {
    width: 19px;
    min-height: 38px;
  }
  h1 {
    font-size: 28px;
    font-family: Prata;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.clr1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default StyledLogo;
