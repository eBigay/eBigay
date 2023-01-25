import { Dispatch, SetStateAction } from "react";
import { Autocomplete, TextField } from "@mui/material";
import CategoriesToFilter from "../data/CategoriesToFilter";

interface CategoryAutocompleteProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const CategoryAutocomplete = ({
  selectedCategory,
  setSelectedCategory,
}: CategoryAutocompleteProps) => {
  return (
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
            input: {
              "&::placeholder": {
                // <----- Add this.
                opacity: 1,
              },
            },
          }}
        />
      )}
      inputValue={selectedCategory}
      onInputChange={(event, value) => {
        setSelectedCategory(value);
      }}
      sx={{
        width: 500,
        "@media (max-width: 1200px)": {
          width: "90%",
        },
        "@media (max-width: 1000px)": {
          width: "100%",
        },
        "@media (max-width: 600px)": {
          width: "90%",
        },
        ".MuiFormControl-root": {
          width: "100%",
        },
        ".MuiInputBase-root ": {
          height: 70,
          borderRadius: 2.5,
          fontSize: 20,
          fontFamily: "Poppins",
          color: "rgba(144, 135, 170,1)",
          opacity: 1,
          "@media (max-width: 600px)": {
            fontSize: 14,
          },
        },
        ".MuiOutlinedInput-root ": {
          padding: "5px 30px",
        },
      }}
    />
  );
};

export default CategoryAutocomplete;
