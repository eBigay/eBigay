import styled from "styled-components";

const ProfileContainer = styled.div`
  margin: 2rem 0;
  height: 40vh;
`;
export const Container = styled.div`
  height: 100vh;
`;

export const StyledWelcome = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.clr7};
  color: white;
`;

export default ProfileContainer;
