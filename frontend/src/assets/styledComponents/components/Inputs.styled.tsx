import styled from "styled-components";

type Props = {
  width: number;
  height: number;
};

const StyledInput = styled.div<Props>`
  width: ${({ width }) => (width > 0 ? `${width}px` : "500px")};
  height: ${({ height }) => (height > 0 ? `${height}px` : "70px")};
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.clr3light};
  margin: 1.5rem;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    color: ${({ theme }) => theme.colors.clr3};
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    line-height: 167.2%;
    border: none;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.clr3};
    }
  }

  .inputLeftImage {
    padding: 0 1rem;
  }

  .inputRightImage {
    position: absolute;
    right: 6%;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      filter: brightness(130%);
    }
  }

  button {
    height: 100%;
    width: 125px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
  }
`;

export default StyledInput;
