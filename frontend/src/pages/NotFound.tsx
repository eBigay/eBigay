import styled from "styled-components";
import NotFoundSvg from "../assets/svgs/notfound.svg";

const NotFoundContainer = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundTitle = styled.h2`
  color: ${(props) => props.theme.colors.clr2};
  font-size: 4rem;
  line-height: 1em;
`;

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <img src={NotFoundSvg} alt="" />
      </NotFoundContent>
    </NotFoundContainer>
  );
};
