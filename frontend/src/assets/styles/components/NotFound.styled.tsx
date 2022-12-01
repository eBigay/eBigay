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
  color: ${(props) => props.theme.colors.clr2};
  font-size: 4rem;
  line-height: 1em;
`;
