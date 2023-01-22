import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { UseQueryResult } from "react-query";
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
    limit: 6,
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
            "@media (max-width: 1000px)": {
              width: "100%",
            },
          }}
        />
      )}
      inputValue={query}
      ref={inputSearchRef}
      onInputChange={(event, value) => handleChange(value)}
      sx={{
        "@media (max-width: 1000px)": {
          paddingTop: "5px",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    />
  );
};

export default Autocomplete;
