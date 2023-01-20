import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { UseQueryResult } from "react-query";
import { TextField } from "@mui/material";
import useItems from "../hooks/useItems";
import PrimaryButton from "../assets/styles/base/Button.styled";
import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import useDebounce from "../hooks/useDebounce";
import {
  StyledButton,
  StyledClearIcon,
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledAutocomplete,
  StyledSearchButton,
  StyledSearch,
} from "../assets/styles/layout/SearchForm.styled";

interface ISearchFormProps {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchForm = ({
  isSearchBarOpen,
  setIsSearchBarOpen,
}: ISearchFormProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");

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
    results === undefined || results.length < 1
      ? []
      : [...new Set(results?.map((result) => result.itemName))];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    setFilterBy({ ...filterBy, queryText: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location.pathname.includes("search")) {
      navigate(`/search?q=${query}`);
      return;
    }
    navigate(`/search?q=${query}`);
    window.location.reload();
  };

  const toggleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <StyledContainer isSearchBarOpen={isSearchBarOpen}>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSearchButton disabled={!query} type="submit">
            <StyledSearch isdisabled={query} />
          </StyledSearchButton>
          <StyledAutocomplete
            disablePortal
            autoComplete
            autoHighlight
            openOnFocus={false}
            id="combo-box-demo"
            options={queryTextResults}
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
          <PrimaryButton
            width="115px"
            height="50px"
            fontSize="xs"
            borderRadius="10px"
            disabled={!query}
            type="submit"
          >
            Search
          </PrimaryButton>
        </StyledForm>
        <StyledButton onClick={toggleSearchBarOpen}>
          <StyledClearIcon />
        </StyledButton>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SearchForm;
