import styled from "styled-components";

export const NotFoundContainer = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundTitle = styled.h2`
  color: ${(props) => props.theme.colors.clr3};
  font-size: 4rem;
`;

export const NotFoundImg = styled.img`
  min-height: 20rem;
  width: 20rem;
  max-width: 100%;
  max-height: 100%;
`;
