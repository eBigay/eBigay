import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router";
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
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const toggleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/?q=${query}`);
    toggleSearchBarOpen();
  };

  return (
    <StyledContainer isSearchBarOpen={isSearchBarOpen}>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSearchButton disabled={!query} type="submit">
            <StyledSearch isdisabled={query} />
          </StyledSearchButton>
          <Autocomplete query={query} setQuery={setQuery} />
        </StyledForm>
        <StyledButton onClick={toggleSearchBarOpen}>
          <StyledClearIcon />
        </StyledButton>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SearchForm;
