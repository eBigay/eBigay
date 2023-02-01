import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { TextField } from "@mui/material";
import useItems from "../hooks/useItems";
import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import useDebounce from "../hooks/useDebounce";
import { StyledAutocomplete } from "../assets/styles/layout/SearchForm.styled";

interface AutocompleteProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Autocomplete = ({ query, setQuery }: AutocompleteProps) => {
  const [filterBy, setFilterBy] = useState<IFilterBy>({
    queryText: "",
    category: "",
    page: 0,
    sortBy: "createdAt",
    sortOrder: "desc",
    limit: 8,
  });

  const { useQueryAllItems } = useItems();

  const debouncedFilter = useDebounce(filterBy, 300);

  const { data: results }: UseQueryResult<IItem[], any> =
    useQueryAllItems(debouncedFilter);

  const queryTextResults =
    !results || results.length < 1 || !Array.isArray(results)
      ? []
      : results.map((result) => result.itemName);

  const handleChange = (value: string) => {
    setQuery(value);
    setFilterBy({ ...filterBy, queryText: value });
  };

  const inputSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  return (
    <StyledAutocomplete
      disablePortal
      autoComplete
      autoHighlight
      freeSolo // allows to search when the options array is empty
      id="autocomplete"
      options={[...new Set(queryTextResults)]}
      renderInput={(params) => (
        <TextField
          {...params}
          key={params.id}
          placeholder="Search here..."
          sx={{
            width: "90%",
            "@media (max-width: 600px)": {
              width: "100vh",
            },
          }}
        />
      )}
      inputValue={query}
      ref={inputSearchRef}
      onInputChange={(event, value) => handleChange(value)}
      sx={{
        ".MuiOutlinedInput-root ": {
          padding: "0px",
          ".MuiAutocomplete-input": {
            padding: "12px 2px",
          },
        },
        "@media (max-width: 1000px)": {
          padding: "8px 0 0",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none",
          padding: "4px 0 0",
        },
      }}
    />
  );
};

export default Autocomplete;
