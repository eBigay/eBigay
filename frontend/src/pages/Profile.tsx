import { Avatar } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import ProfileContainer, {
  StyledWelcome,
} from "../assets/styles/pages/Profile.styled";
import ItemCard from "../components/ItemCard";
import useAuthContext from "../hooks/useAuthContext";
import useItems from "../hooks/useItems";
import { IItem } from "../interfaces/IItem.interface";

const Profile = () => {
  const {
    state: { user },
  } = useAuthContext();

  const { useFetchUserItems } = useItems();

  const {
    isLoading,
    data: items,
    isError,
    error,
  }: UseQueryResult<IItem[], any> = useFetchUserItems(user?.id);

  console.log(items);

  const { remove } = useItems();
  const { mutate: removeItem } = remove;

  return (
    <ProfileContainer>
      <StyledWelcome>
        <Avatar src={user?.imageUrl} sx={{ width: 90, height: 90 }} />
        <h1>{user?.username}</h1>
        {error && <h2>{error}</h2>}
        {items?.map((item) => (
          <div key={item.id}>
            <ItemCard item={item} />
            <button onClick={() => removeItem(item.id)}>remove</button>
          </div>
        ))}
      </StyledWelcome>
    </ProfileContainer>
  );
};

export default Profile;
