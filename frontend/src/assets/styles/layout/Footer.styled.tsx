import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footer};
  gap: 1.9rem;
  width: 100%;
  padding: 50px 80px;
  margin-top: 96px;
`;

export const FooterText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  font-weight: 400;
  text-align: center;
  max-width: 50rem;
`;

export const FooterHR = styled.div`
  width: 100%;
  border-top: 1px solid rgba(215, 215, 215, 1);
`;

export const Copyrights = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  color: ${({ theme }) => theme.colors.clr3};
`;

export default FooterContainer;
