import { useState } from "react";
import { Formik, FormikValues } from "formik";
import { toast } from "react-toastify";

import { ClearOutlined, AddAPhoto } from "@mui/icons-material";
import {
  StyledNewItemContainer,
  StyledAddNewItemText,
  StyledForm,
  AddNewItemImageContainer,
  AddNewItemImage,
  ImageWrapper,
  StyledCancelButton,
  StyledAddPhotosButton,
} from "../assets/styles/pages/AddNewItem.styled";

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
  condition: string;
}

const AddNewItem = () => {
  const [urls, updateUrls] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string>("");

  const initialValues: NewItemValues = {
    itemName: "",
    description: "",
    qty: 1,
    location: "israel",
    category: "Electronics",
    condition: "New",
  };

  const { add } = useItems();
  const { mutate: addItem } = add;

  const {
    auth: { user },
  } = useAuthContext();

  const selectCategories = CategoriesToFilter.map((category) => {
    return { key: category.id, value: category.category };
  });

  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      setUploadError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrls((prevUrls) => [...prevUrls, result?.info?.url]);
  }

  const handleDeleteImage = (urlToDelete: string) => {
    updateUrls((prevUrls) => prevUrls.filter((url) => url !== urlToDelete));
  };

  const handleAddNewItem = (values: NewItemValues) => {
    if (!user) return;
    if (!urls.length) {
      toast.error("item images are required");
      return;
    }
    const newItem = {
      ...values,
      images: urls,
      createdAt: Date.now(),
      createdBy: user._id,
    };
    addItem(newItem);
  };

  return (
    <StyledNewItemContainer>
      <StyledAddNewItemText>Add new Item:</StyledAddNewItemText>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik values:", values); // Add this line for debugging
          handleAddNewItem(values);
          updateUrls(() => []);
          resetForm({});
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
              label="Category:"
              name="category"
              options={selectCategories}
            />
            <FormikController
              control="select"
              label="Condition:"
              name="condition"
              options={["New", "Used(like-new)", "Used(good)", "Used(fair)"]}
            />
            <FormikController
              control="select"
              label="Quantity:"
              name="qty"
              options={[1, 2, 3, 4, 5, 6, 7, 8]}
            />
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }: any) => {
                function handleOnClick(e: any) {
                  e.preventDefault();
                  open();
                }
                return (
                  <StyledAddPhotosButton onClick={handleOnClick}>
                    <AddAPhoto />
                    Add photos
                  </StyledAddPhotosButton>
                );
              }}
            </UploadWidget>
            <PrimaryButton width="120px" fontSize="l" type="submit">
              Add Item
            </PrimaryButton>
            {uploadError !== "" && <h2>{uploadError}</h2>}
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
