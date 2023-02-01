import styled from "styled-components";
import FadeIn from "../layout/FadeIn.styled";

const ProfileContainer = styled(FadeIn)`
  height: 100vh;
`;

export const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.clr7};
  height: 20vh;
  color: white;
`;

export default ProfileContainer;
