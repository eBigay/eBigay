import { useState } from "react";
import { Formik, FormikValues } from "formik";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Autocomplete,
  TextField,
} from "@mui/material";
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
  const [uploadError, setUploadError] = useState<string>("");

  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      setUploadError(error);
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

  const [selectedCategory, setSelectedCategory] = useState("");

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
            <Input type="text" placeholder="item name" valueName="itemName" />
            <Input
              type="text"
              placeholder="description"
              valueName="description"
            />

            <Autocomplete
              disablePortal
              autoComplete
              autoHighlight
              freeSolo // allows to search when the options array is empty
              id="categories"
              options={CategoriesToFilter.map((category) => category.category)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  key={params.id}
                  placeholder="Categories"
                  sx={{
                    width: "90%",
                    "@media (max-width: 600px)": {
                      width: "100vh",
                    },
                  }}
                />
              )}
              inputValue={selectedCategory}
              onInputChange={(event, value) => setSelectedCategory(value)}
              sx={{
                width: 500,
                ".MuiFormControl-root": {
                  width: "100%",
                },
                ".MuiInputBase-root ": {
                  height: 60,
                },
                ".MuiOutlinedInput-root ": {
                  padding: "5px 30px",
                },
                ".MuiAutocomplete-input": {
                  // padding: "12px 2px",
                },
                "@media (max-width: 1000px)": {
                  // padding: "8px 0 0",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  // padding: "4px 0 0",
                },
              }}
            />

            <FormControl
              sx={{
                m: 1,
                minWidth: 500,
                "@media (max-width: 1000px)": {
                  minWidth: "100%",
                },
                "@media (max-width: 600px)": {
                  minWidth: "90%",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                placeholder="Category"
                displayEmpty
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                sx={{ height: 60 }}
              >
                {CategoriesToFilter.map((category) => (
                  <MenuItem key={category.id} value={category.category}>
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* eslint-disable */}
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
            {/* eslint-enable */}
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
