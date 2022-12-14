import { Avatar } from "@mui/material";
import ProfileContainer, {
  StyledWelcome,
} from "../assets/styles/pages/Profile.styled";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
  const {
    state: { user },
  } = useAuthContext();
  return (
    <ProfileContainer>
      <StyledWelcome>
        <Avatar src={user?.imgUrl} sx={{ width: 90, height: 90 }} />
        <h1>{user?.name}</h1>
      </StyledWelcome>
    </ProfileContainer>
  );
};

export default Profile;
