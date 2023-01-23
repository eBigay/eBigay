import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Avatar } from "@mui/material";
import ProfileContainer, {
  StyledWelcome,
} from "../assets/styles/pages/Profile.styled";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
  const {
    state: { user },
  } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <ProfileContainer>
      <StyledWelcome>
        <Avatar src={user?.imageUrl} sx={{ width: 90, height: 90 }} />
        <h1>{user?.username}</h1>
      </StyledWelcome>
    </ProfileContainer>
  );
};

export default Profile;
