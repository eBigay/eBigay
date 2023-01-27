import { useState } from "react";
import { Formik, FormikValues } from "formik";
import { ClearOutlined } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import {
  StyledNewItemContainer,
  StyledAddNewItemText,
  StyledForm,
  AddNewItemImageContainer,
  AddNewItemImage,
  ImageWrapper,
  StyledCancelButton,
} from "../assets/styles/pages/AddNewItem.styled";

import Input from "../components/layout/Input";

// @ts-ignore
import UploadWidget from "../components/UploadWidget";
import PrimaryButton from "../assets/styles/base/Button.styled";
import useItems from "../hooks/useItems";
import useAuthContext from "../hooks/useAuthContext";

import itemSchema from "../schemas/ItemSchema";
import FormikController from "../components/layout/FormControl";
import CategoriesToFilter from "../data/CategoriesToFilter";

interface NewItemValues {
  itemName: string;
  description: string;
  qty: number;
  location: string;
  category: string;
}

const AddNewItem = () => {
  const initialValues: NewItemValues = {
    itemName: "",
    description: "",
    qty: 1,
    location: "israel",
    category: "electronics",
  };

  const { add } = useItems();
  const { mutate: addItem } = add;

  const {
    state: { user },
  } = useAuthContext();

  const [urls, updateUrls] = useState<string[]>([]);
  const [error, updateError] = useState<any>();

  const updatedCategories = CategoriesToFilter.map((category) => {
    return { key: category.id, value: category.category };
  });

  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    if (result.event === "success")
      updateUrls((prevUrls) => [...prevUrls, result?.info?.secure_url]);
  }

  const handleDeleteImage = (urlToDelete: string) => {
    updateUrls((prevUrls) => prevUrls.filter((url) => url !== urlToDelete));
  };

  const handleAddNewItem = (values: NewItemValues) => {
    if (!user) return;
    delete user?.ACCESS_TOKEN;

    const newItem = {
      id: uuidv4(),
      ...values,
      images: urls,
      createdAt: Date.now(),
      createdBy: user,
    };
    addItem(newItem);
  };

  return (
    <StyledNewItemContainer>
      <StyledAddNewItemText>Add new Item:</StyledAddNewItemText>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleAddNewItem(values);
          updateUrls(() => []);
          resetForm();
        }}
        validationSchema={itemSchema}
      >
        {({ handleSubmit }: FormikValues) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormikController
              control="input"
              type="text"
              placeholder="item name"
              name="itemName"
            />
            <FormikController
              control="textArea"
              label="Description"
              name="description"
            />
            <FormikController
              control="select"
              label="category "
              name="select"
              options={updatedCategories}
            />
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }: any) => {
                function handleOnClick(e: any) {
                  e.preventDefault();
                  open();
                }
                return (
                  <PrimaryButton onClick={handleOnClick}>
                    Upload an Image
                  </PrimaryButton>
                );
              }}
            </UploadWidget>
            <PrimaryButton width="120px" fontSize="l" type="submit">
              Add Item
            </PrimaryButton>
          </StyledForm>
        )}
      </Formik>
      <AddNewItemImageContainer>
        {urls && (
          <>
            {urls.map((url) => (
              <ImageWrapper key={url}>
                <AddNewItemImage src={url} />
                <StyledCancelButton onClick={() => handleDeleteImage(url)}>
                  <ClearOutlined fontSize="small" />
                </StyledCancelButton>
              </ImageWrapper>
            ))}
          </>
        )}
      </AddNewItemImageContainer>
    </StyledNewItemContainer>
  );
};

export default AddNewItem;
