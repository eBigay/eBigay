import styled from "styled-components";

const ProfileContainer = styled.div`
  margin-top: 5rem;
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
