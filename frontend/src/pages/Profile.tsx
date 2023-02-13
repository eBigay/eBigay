import { Avatar } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import useAuthContext from "../hooks/useAuthContext";
import useItems from "../hooks/useItems";
import { IItem } from "../interfaces/IItem.interface";

import ProfileContainer, {
  StyledWelcome,
  Container,
} from "../assets/styles/pages/Profile.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import MainLayout from "../assets/styles/layout/MainLayout.styled";
import { CreatedByTime } from "../assets/styles/components/ItemDetails.styled";
import { formatDistance } from "date-fns";
import { Delete } from "@mui/icons-material";

const Profile = () => {
  const {
    auth: { user },
  } = useAuthContext();

  const { useFetchUserItems } = useItems();

  const { data: items }: UseQueryResult<any> = useFetchUserItems(user?._id);

  const { remove } = useItems();
  const { mutate: removeItem } = remove;

  const relativeTimeString = (createdAt: number | Date) => {
    return formatDistance(createdAt, new Date(), {
      addSuffix: true,
    });
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "itemName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "quantity",
      flex: 1,
    },

    {
      field: "removeItem",
      headerName: "remove",
      flex: 1,
      renderCell: (params: any) => (
        <PrimaryButton fontSize="s" onClick={() => removeItem(params.row.id)}>
          <Delete />
        </PrimaryButton>
      ),
    },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      renderCell: (params: any) => (
        <CreatedByTime>
          {relativeTimeString(params.row.createdAt)}
        </CreatedByTime>
      ),
    },
  ];

  return (
    <>
      <StyledWelcome>
        <Avatar src={user?.imageUrl} sx={{ width: 90, height: 90 }} />
        <h1>{user?.username}</h1>
      </StyledWelcome>
      <ProfileContainer>
        <MainLayout>
          <DataGrid columns={columns} rows={items || []} />
        </MainLayout>
      </ProfileContainer>
    </>
  );
};

export default Profile;
