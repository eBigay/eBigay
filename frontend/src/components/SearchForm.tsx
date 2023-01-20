import { Dispatch, SetStateAction, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PrimaryButton from "../assets/styles/base/Button.styled";
import {
  StyledButton,
  StyledClearIcon,
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledSearchButton,
  StyledSearch,
} from "../assets/styles/layout/SearchForm.styled";
import Autocomplete from "./Autocomplete";

interface ISearchFormProps {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchForm = ({
  isSearchBarOpen,
  setIsSearchBarOpen,
}: ISearchFormProps) => {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();

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
          <Autocomplete query={query} setQuery={setQuery} />
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
