import {
  StyledNewItemContainer,
  StyledAddNewItemText,
  StyledForm,
} from "../assets/styles/pages/AddNewItem.styled";
import { Formik, FormikValues } from "formik";

import Input from "../components/Input";
import useUploadImage from "../hooks/useUploadImage";
import { ChangeEvent, useEffect, useState } from "react";
import { ImageInput } from "../assets/styles/components/LoginInput.styled";
import { Skeleton } from "@mui/material";

interface NewItemValues {
  itemName: string;
  images: string[];
  description: string;
  qty: number;
}

const AddNewItem = () => {
  const initialValues: NewItemValues = {
    itemName: "",
    images: [],
    description: "",
    qty: 1,
  };

  const [itemImage, setItemImage] = useState<File>();

  const imageName = () => {
    if (!itemImage) return "";
    return itemImage.name.length > 25
      ? `${itemImage.name.slice(0, 25)}...`
      : itemImage.name;
  };

  const {
    data,
    isFetching: isUploading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useUploadImage(itemImage!);

  useEffect(() => {
    console.log(itemImage);
    if (typeof itemImage !== "undefined") {
      refetch();
    }
  }, [itemImage, refetch]);

  return (
    <StyledNewItemContainer>
      <StyledAddNewItemText>Add new Item:</StyledAddNewItemText>
      <Formik initialValues={initialValues} onSubmit={(values) => {}}>
        {({ handleSubmit }: FormikValues) => (
          <StyledForm onSubmit={handleSubmit}>
            <Input type="text" placeholder="item name"></Input>
            <Input type="text" placeholder="description" height={100}></Input>
            <ImageInput
              type="file"
              name="userImage"
              accept=".jpg,.jpeg,.png"
              required
              onInvalid={(event: ChangeEvent<HTMLInputElement>) =>
                event.target.setCustomValidity("Select profile image")
              }
              onInput={(event: ChangeEvent<HTMLInputElement>) =>
                event.target.setCustomValidity("")
              }
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setItemImage(event.target.files[0]);
                }
              }}
            />
            {data ? (
              <img
                style={{
                  width: 210,
                  height: 118,
                }}
                src={data?.data.url}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
          </StyledForm>
        )}
      </Formik>
    </StyledNewItemContainer>
  );
};

export default AddNewItem;
